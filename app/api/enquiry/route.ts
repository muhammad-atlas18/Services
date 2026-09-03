import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { contactCategoryLabel, contactServiceLabel } from "@/lib/contact-services";
import { normaliseEnquiry, validateEnquiry } from "@/lib/enquiry-validation";

const attempts = new Map<string, { count:number; resetAt:number }>();
const recentSubmissions = new Map<string, number>();
const WINDOW_MS = 60_000;
const DUPLICATE_MS = 120_000;
const MAX_ATTEMPTS = 5;
const genericFailure = "We could not submit your enquiry at this time. Please review your details and try again.";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[character]!);
const clientKey = (request: NextRequest) => request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) return NextResponse.json({ error:genericFailure }, { status:403 });
  const key = clientKey(request); const now = Date.now(); const current = attempts.get(key);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) return NextResponse.json({ error:"Please wait before trying again." }, { status:429 });
  attempts.set(key, { count:current && current.resetAt > now ? current.count + 1 : 1, resetAt:now + WINDOW_MS });

  const raw: unknown = await request.json().catch(() => null);
  if (!raw || typeof raw !== "object") return NextResponse.json({ error:genericFailure }, { status:400 });
  const data = normaliseEnquiry(raw as Record<string, unknown>);
  if (data.website) return NextResponse.json({ ok:true });
  const fields = validateEnquiry(data);
  if (Object.keys(fields).length) return NextResponse.json({ error:"Please correct the highlighted fields.", fields }, { status:400 });

  const fingerprint = createHash("sha256").update(`${key}|${data.email}|${data.phone}|${data.category}|${data.service}|${data.details}`).digest("hex");
  const duplicateAt = recentSubmissions.get(fingerprint);
  if (duplicateAt && now - duplicateAt < DUPLICATE_MS) return NextResponse.json({ error:"This enquiry was already submitted. Please wait before sending it again." }, { status:409 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME || "GharMahir Website";
  if (!apiKey || !recipient || !fromEmail) {
    console.error("Contact delivery is not configured. Required server-side email environment variables are missing.");
    return NextResponse.json({ error:genericFailure }, { status:503 });
  }

  const category = contactCategoryLabel(data.category);
  const service = contactServiceLabel(data.category, data.service);
  const propertyType = data.propertyType || "Not Provided";
  const visitDate = data.visitDate || "Not Provided";
  const submittedAt = new Intl.DateTimeFormat("en-PK", { dateStyle:"medium", timeStyle:"medium", timeZone:"Asia/Karachi" }).format(new Date());
  const pageUrl = `${request.nextUrl.origin}/contact`;
  const subject = `New Website Enquiry – ${category} – ${service}`;
  const text = `NEW WEBSITE SERVICE ENQUIRY

Customer Details
----------------
Full Name: ${data.fullName}
Email Address: ${data.email}
Phone Number: ${data.phone}
Area in Lahore: ${data.area}

Service Requirement
-------------------
Main Category: ${category}
Required Service: ${service}
Property Type: ${propertyType}
Preferred Contact Method: ${data.contactMethod}
Preferred Visit Date: ${visitDate}

Service Details
---------------
${data.details}

Submission Information
----------------------
Submission Language: ${data.language}
Submitted From: Contact Us Page
Submitted At: ${submittedAt}
Page URL: ${pageUrl}`;
  const rows = [["Submission Language",data.language],["Full Name",data.fullName],["Email Address",data.email],["Phone Number",data.phone],["Area in Lahore",data.area],["Main Category",category],["Required Service",service],["Property Type",propertyType],["Preferred Contact Method",data.contactMethod],["Preferred Visit Date",visitDate]];
  const html = `<!doctype html><html><body style="margin:0;background:#f3f7f5;font-family:Arial,sans-serif;color:#1c2733"><div style="max-width:680px;margin:24px auto;background:#fff;border:1px solid #d8e2de;border-radius:14px;overflow:hidden"><div style="padding:24px 28px;background:#0b1f33;color:#fff"><strong style="color:#f5b82e">GharMahir</strong><h1 style="margin:7px 0 0;font-size:24px">New Service Enquiry</h1></div><div style="padding:28px"><div style="padding:14px 16px;background:#edf5f1;border-left:4px solid #0f6b4f"><small>Selected service</small><div style="font-size:18px;font-weight:bold">${escapeHtml(service)}</div></div><table role="presentation" style="width:100%;margin:22px 0;border-collapse:collapse">${rows.map(([label,value]) => `<tr><th style="padding:10px;border-bottom:1px solid #e5ece9;text-align:left;font-size:13px">${escapeHtml(label)}</th><td style="padding:10px;border-bottom:1px solid #e5ece9;font-size:13px">${escapeHtml(value)}</td></tr>`).join("")}</table><h2 style="font-size:17px">Service Details</h2><p style="padding:16px;background:#f7faf8;white-space:pre-wrap;line-height:1.6">${escapeHtml(data.details)}</p><p style="color:#667085;font-size:12px">Submitted from Contact Us Page · ${escapeHtml(submittedAt)}<br><a href="${pageUrl}">${pageUrl}</a></p><p><a href="mailto:${encodeURIComponent(data.email)}" style="display:inline-block;margin-right:8px;padding:11px 15px;border-radius:8px;background:#0f6b4f;color:#fff;text-decoration:none">Reply to Customer</a><a href="tel:${data.phone.replace(/[^+\d]/g,"")}" style="display:inline-block;padding:11px 15px;border-radius:8px;border:1px solid #0b1f33;color:#0b1f33;text-decoration:none">Call Customer</a></p></div></div></body></html>`;

  try {
    const delivery = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ authorization:`Bearer ${apiKey}`, "content-type":"application/json" }, body:JSON.stringify({ from:`${fromName} <${fromEmail}>`, to:[recipient], reply_to:data.email, subject, text, html }), cache:"no-store" });
    if (!delivery.ok) { console.error("Contact email provider rejected the delivery request.", delivery.status); return NextResponse.json({ error:genericFailure }, { status:502 }); }
    recentSubmissions.set(fingerprint, now);
    return NextResponse.json({ ok:true });
  } catch (error) {
    console.error("Contact email delivery failed.", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json({ error:genericFailure }, { status:502 });
  }
}
