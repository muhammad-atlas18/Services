"use client";

import { WhatsAppLink } from "@/components/whatsapp-link";
import { usePathname } from "next/navigation";
import { serviceCatalog } from "@/lib/service-catalog";

export function MobileWhatsApp({ service, message, sourcePage }: { service?: string; message?: string; sourcePage?: string }) {
  const pathname = usePathname();
  const routePath = pathname.replace(/^\/ur(?=\/|$)/, "") || "/";
  const detailPath = routePath.startsWith("/services/") && routePath.split("/").length > 3 ? routePath.replace("/services/", "") : "";
  const detail = serviceCatalog.find((item) => item.path === detailPath);
  const category = routePath.match(/^\/services\/(solar|electrical|ac|home-appliances)$/)?.[1] || (routePath === "/solar-services-lahore" ? "solar" : routePath === "/electrician-services-lahore" ? "electrical" : routePath === "/ac-services-lahore" ? "ac" : "");
  const pageSource = routePath === "/contact" ? "contact" : routePath === "/about" ? "about" : sourcePage;
  const categoryLabel = category === "home-appliances" ? "Home Appliance Services" : category ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Services` : undefined;
  return <div className="globalWhatsapp"><WhatsAppLink service={detail?.title || service || categoryLabel} serviceId={detail?.path} categoryId={category || undefined} message={message} sourcePage={pageSource} position="floating_sticky">Contact on WhatsApp</WhatsAppLink></div>;
}
