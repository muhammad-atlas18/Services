import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { serviceCatalog } from "@/lib/service-catalog";

type CatalogService = (typeof serviceCatalog)[number];

function CatalogIcon({ type }: { type: string }) {
  if (["solar", "design"].includes(type)) return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  if (["wiring", "rewiring", "breaker", "connection", "fixture"].includes(type)) return <svg viewBox="0 0 24 24"><path d="M13 2 5 14h6l-1 8 9-13h-6V2Z"/></svg>;
  if (["maintenance", "cleaning"].includes(type)) return <svg viewBox="0 0 24 24"><path d="M4 16c4-1 7-4 8-8 2 4 4 6 8 8"/><path d="M5 20h14M7 16v4m10-4v4"/></svg>;
  if (["cooling"].includes(type)) return <svg viewBox="0 0 24 24"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="m14.7 6.3 3-3a4 4 0 0 1-5 5L6 15l-3 3 3 3 3-3 6.7-6.7a4 4 0 0 1 5-5l-3 3-3-3Z"/></svg>;
}

export function ServiceCatalogCard({ service, position = "service_catalog" }: { service: CatalogService; position?: string }) {
  const badge = service.category === "solar" ? "Solar service" : service.category === "electrical" ? "Electrical service" : "AC service";
  return <article className="catalogCard"><Link className="catalogImage" href={service.route} aria-label={`View ${service.title}`}><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, (max-width: 1280px) 33vw, 25vw" /></Link><div className="catalogBody"><div className="catalogTop"><span className="catalogIcon" aria-hidden="true"><CatalogIcon type={service.icon} /></span><span className="catalogBadge">{badge}</span></div><h3><Link href={service.route}>{service.title}</Link></h3><p>{service.summary}</p><div className="catalogActions"><Link className="button secondary" href={service.route}>View Details</Link><WhatsAppLink service={service.title} message={service.whatsappMessage} position={position}>Contact on WhatsApp</WhatsAppLink></div></div></article>;
}
