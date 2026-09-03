import Image from "next/image";
import Link from "next/link";
import { getCategoryMeta, type ServiceCategory } from "@/lib/service-catalog";

function CategoryIcon({ category }: { category: ServiceCategory }) {
  if (category === "solar") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  if (category === "electrical") return <svg viewBox="0 0 24 24"><path d="M13 2 5 14h6l-1 8 9-13h-6V2Z"/></svg>;
  if (category === "ac") return <svg viewBox="0 0 24 24"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>;
  return <svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 9h14M9 6h.01M9 13h.01"/></svg>;
}

const urdu = { solar:{ label:"سولر سروسز", description:"لاہور میں سولر کی تنصیب، خرابی کی تشخیص، صفائی اور دیکھ بھال کی پیشہ ورانہ خدمات۔" }, electrical:{ label:"الیکٹریکل سروسز", description:"محفوظ وائرنگ، برقی خرابی کی تشخیص، ڈسٹری بیوشن بورڈ اور فٹنگز کی خدمات۔" }, ac:{ label:"اے سی سروسز", description:"اے سی کی تنصیب، مرمت، دیکھ بھال اور کولنگ کی قابلِ اعتماد خدمات۔" }, "home-appliances":{ label:"گھریلو برقی آلات کی خدمات", description:"باورچی خانے اور لانڈری کے ضروری آلات کی تشخیص اور مرمت۔" } } as const;
export function MainServiceCategoryCard({ category, locale = "en" }: { category: ServiceCategory; locale?: "en" | "ur" }) {
  const service = getCategoryMeta(category);
  const copy = locale === "ur" ? urdu[category] : { label:service.label, description:service.cardDescription };
  const href = locale === "ur" ? `/ur${service.route}` : service.route;
  return <article className={`mainCategoryCard mainCategoryCard-${category}`}><Link className="mainCategoryCardLink" href={href} aria-label={locale === "ur" ? `${copy.label} کی تفصیل دیکھیں` : `See service details for ${copy.label}`} /><div className="mainCategoryImage"><Image src={service.image} alt={locale === "ur" ? `لاہور میں ${copy.label}` : service.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw" /></div><div className="mainCategoryBody"><span className="mainCategoryIcon" aria-hidden="true"><CategoryIcon category={category} /></span><h3>{copy.label}</h3><p>{copy.description}</p><Link className="button secondary mainCategoryAction" href={href}>{locale === "ur" ? "سروس کی تفصیل دیکھیں" : "See Service Details"}</Link></div></article>;
}
