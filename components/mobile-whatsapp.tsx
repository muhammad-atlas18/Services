"use client";

import { WhatsAppLink } from "@/components/whatsapp-link";

export function MobileWhatsApp({ service, message }: { service?: string; message?: string }) {
  return <div className="mobileWhatsapp"><WhatsAppLink service={service} message={message} position="mobile_sticky">Contact on WhatsApp</WhatsAppLink></div>;
}
