import { site } from "@/lib/site";
import { getWhatsAppMessage, type WhatsAppContext } from "@/config/whatsapp-messages";

export function buildWhatsAppUrl(context: WhatsAppContext = {}) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(context))}`;
}
