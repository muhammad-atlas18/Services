"use client";

import { whatsappMessage, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";

export function WhatsAppLink({ service, children, className = "button primary", position = "content" }: { service?: string; children: React.ReactNode; className?: string; position?: string }) {
  return <a className={className} target="_blank" rel="noreferrer" href={whatsappUrl(whatsappMessage(service))} onClick={() => track({ event: "whatsapp_click", page_path: window.location.pathname, service: service || "general", cta_position: position, device_type: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop" })}>{children}</a>;
}
