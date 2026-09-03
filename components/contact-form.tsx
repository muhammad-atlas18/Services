"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { contactServiceOptions } from "@/lib/contact-services";
import { normaliseEnquiry, validateEnquiry, type EnquiryErrors, type EnquiryPayload } from "@/lib/enquiry-validation";

const initial: EnquiryPayload = { fullName:"", email:"", phone:"", area:"", category:"", service:"", propertyType:"", contactMethod:"", visitDate:"", details:"", consent:false, website:"", language:"English" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const selectedCategory = contactServiceOptions.find((item) => item.id === values.category);
  const update = (name: keyof EnquiryPayload, value: string | boolean) => { setValues((current) => ({ ...current, [name]: value, ...(name === "category" ? { service:"" } : {}) })); setErrors((current) => ({ ...current, [name]: undefined, ...(name === "category" ? { service:undefined } : {}) })); };
  const field = (name: keyof EnquiryPayload) => ({ "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${name}-error` : undefined });
  const errorFor = (name: keyof EnquiryPayload) => errors[name] ? <span className="fieldError" id={`${name}-error`} role="alert"><b aria-hidden="true">!</b>{errors[name]}</span> : null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (sending) return; setSubmitError("");
    const language = window.location.pathname === "/ur" || window.location.pathname.startsWith("/ur/") ? "Urdu" : "English"; const cleaned = normaliseEnquiry({ ...values, language }); const validation = validateEnquiry(cleaned); setValues(cleaned); setErrors(validation);
    const firstError = Object.keys(validation)[0]; if (firstError) { window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus()); return; }
    setSending(true);
    try { const response = await fetch("/api/enquiry", { method:"POST", headers:{ "content-type":"application/json" }, body:JSON.stringify(cleaned) }); const result = await response.json() as { ok?:boolean; error?:string; fields?:EnquiryErrors }; if (!response.ok || !result.ok) { if (result.fields) { setErrors(result.fields); const first = Object.keys(result.fields)[0]; window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()); } throw new Error(); } track({ event:"contact_form_submit", page_path:window.location.pathname, service:cleaned.service, area:cleaned.area }); setSuccess(true); }
    catch { setSubmitError("We could not submit your enquiry at this time. Please review your details and try again."); }
    finally { setSending(false); }
  }

  if (success) return <section className="contactSuccess" aria-live="polite"><span aria-hidden="true">✓</span><h2>Thank You — Your Enquiry Has Been Submitted</h2><p>We have received your service enquiry. Our team will review the details and contact you using your preferred contact method.</p><div><Link className="button primary" href="/">Return to Homepage</Link><Link className="button secondary" href="/#services">Explore Services</Link></div></section>;

  return <form ref={formRef} className="contactForm" noValidate onSubmit={handleSubmit} onFocus={() => track({ event:"contact_form_start", page_path:window.location.pathname, service:values.service || "unknown" })}>
    <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={values.website} onChange={(e) => update("website",e.target.value)}/>
    <div className="contactFormGrid">
      <label className="contactField"><span>Full Name <b>*</b></span><input name="fullName" autoComplete="name" minLength={2} maxLength={80} value={values.fullName} onChange={(e)=>update("fullName",e.target.value)} {...field("fullName")}/>{errorFor("fullName")}</label>
      <label className="contactField"><span>Email Address <b>*</b></span><input name="email" type="email" autoComplete="email" maxLength={150} value={values.email} onChange={(e)=>update("email",e.target.value)} {...field("email")}/>{errorFor("email")}</label>
      <label className="contactField"><span>Phone Number <b>*</b></span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} placeholder="0300 1234567" value={values.phone} onChange={(e)=>update("phone",e.target.value)} {...field("phone")}/>{errorFor("phone")}</label>
      <label className="contactField"><span>Area in Lahore <b>*</b></span><input name="area" autoComplete="address-level2" minLength={2} maxLength={100} value={values.area} onChange={(e)=>update("area",e.target.value)} {...field("area")}/>{errorFor("area")}</label>
      <label className="contactField"><span>Main Service Category <b>*</b></span><select name="category" value={values.category} onChange={(e)=>update("category",e.target.value)} {...field("category")}><option value="">Select category</option>{contactServiceOptions.map((item)=><option value={item.id} key={item.id}>{item.label}</option>)}</select>{errorFor("category")}</label>
      <label className="contactField"><span>Required Service <b>*</b></span><select name="service" disabled={!selectedCategory} value={values.service} onChange={(e)=>update("service",e.target.value)} {...field("service")}><option value="">{selectedCategory ? "Select required service" : "Select a category first"}</option>{selectedCategory?.services.map((item)=><option value={item.id} key={item.id}>{item.label}</option>)}</select>{errorFor("service")}</label>
      <label className="contactField"><span>Property Type <small>Optional</small></span><select name="propertyType" value={values.propertyType} onChange={(e)=>update("propertyType",e.target.value)} {...field("propertyType")}><option value="">Select property type</option>{["Residential","Commercial","Office","Shop","Other"].map((item)=><option value={item} key={item}>{item}</option>)}</select>{errorFor("propertyType")}</label>
      <label className="contactField"><span>Preferred Contact Method <b>*</b></span><select name="contactMethod" value={values.contactMethod} onChange={(e)=>update("contactMethod",e.target.value)} {...field("contactMethod")}><option value="">Select contact method</option><option value="Phone Call">Phone Call</option><option value="Email">Email</option></select>{errorFor("contactMethod")}</label>
      <label className="contactField contactDate"><span>Preferred Visit Date <small>Optional</small></span><input name="visitDate" type="date" value={values.visitDate} min={new Date().toISOString().slice(0,10)} onChange={(e)=>update("visitDate",e.target.value)} {...field("visitDate")}/>{errorFor("visitDate")}</label>
      <label className="contactField contactDetails"><span>Service Details <b>*</b></span><textarea name="details" rows={7} minLength={20} maxLength={1500} placeholder="Please describe the installation, repair, maintenance or fault you need help with." value={values.details} onChange={(e)=>update("details",e.target.value)} {...field("details")}/><small>{values.details.length}/1500 characters</small>{errorFor("details")}</label>
    </div>
    <label className="contactConsent"><input name="consent" type="checkbox" checked={values.consent} onChange={(e)=>update("consent",e.target.checked)} {...field("consent")}/><span>I agree that my information may be used to respond to this service enquiry. I have read the <Link href="/privacy-policy">Privacy Policy</Link>.</span></label>{errorFor("consent")}
    {submitError && <div className="contactSubmitError" role="alert"><b>Submission unsuccessful.</b><span>{submitError}</span></div>}
    <button className="button primary contactSubmit" type="submit" disabled={sending}>{sending ? "Submitting Enquiry…" : "Submit Enquiry"}<span aria-hidden="true">→</span></button>
  </form>;
}
