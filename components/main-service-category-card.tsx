import Image from "next/image";
import Link from "next/link";
import { getCategoryMeta, type ServiceCategory } from "@/lib/service-catalog";

function CategoryIcon({ category }: { category: ServiceCategory }) {
  if (category === "solar") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  if (category === "electrical") return <svg viewBox="0 0 24 24"><path d="M13 2 5 14h6l-1 8 9-13h-6V2Z"/></svg>;
  if (category === "ac") return <svg viewBox="0 0 24 24"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>;
  return <svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 9h14M9 6h.01M9 13h.01"/></svg>;
}

export function MainServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const service = getCategoryMeta(category);
  return <article className="mainCategoryCard"><Link className="mainCategoryCardLink" href={service.route} aria-label={`See ${service.label}`} /><div className="mainCategoryImage"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" /></div><div className="mainCategoryBody"><span className="mainCategoryIcon" aria-hidden="true"><CategoryIcon category={category} /></span><h3>{service.label}</h3><p>{service.cardDescription}</p><Link className="button secondary mainCategoryAction" href={service.route}>See {service.label}</Link></div></article>;
}
