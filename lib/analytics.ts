export type AnalyticsEvent =
  | { event: "whatsapp_click"; page_path: string; service: string; cta_position: string; device_type: "mobile" | "desktop" }
  | { event: "phone_click"; page_path: string; cta_position: string }
  | { event: "contact_form_start"; page_path: string; service: string }
  | { event: "contact_form_submit"; page_path: string; service: string; area: string };

declare global { interface Window { dataLayer?: unknown[] } }

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  window.dispatchEvent(new CustomEvent("lahore-services:analytics", { detail: event }));
}
