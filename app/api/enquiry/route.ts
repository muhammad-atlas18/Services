import { NextRequest, NextResponse } from "next/server";

const allowedServices = new Set(["Solar", "Electrical", "AC"]);
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;

function clientKey(request: NextRequest) { return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local"; }

export async function POST(request: NextRequest) {
  const key = clientKey(request); const now = Date.now(); const current = attempts.get(key);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) return NextResponse.json({ error: "Please wait before trying again." }, { status: 429 });
  attempts.set(key, { count: current && current.resetAt > now ? current.count + 1 : 1, resetAt: now + WINDOW_MS });
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const { service, area, message, consent, website } = body as Record<string, unknown>;
  if (website) return NextResponse.json({ ok: true });
  if (!allowedServices.has(String(service)) || typeof area !== "string" || area.trim().length < 2 || typeof message !== "string" || message.trim().length < 10 || message.length > 2000 || consent !== true) return NextResponse.json({ error: "Please complete all required fields and consent." }, { status: 400 });
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ service, area: area.trim(), message: message.trim(), receivedAt: new Date().toISOString() }), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "We could not send your enquiry. Please use WhatsApp instead." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivery: webhook ? "sent" : "not-configured" });
}
