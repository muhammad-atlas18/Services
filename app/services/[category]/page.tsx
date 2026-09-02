import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { ServiceCatalogCard } from "@/components/service-catalog-card";
import { servicesForCategory, type ServiceCategory } from "@/lib/service-catalog";

const categories = {
  solar: { label: "Solar", title: "Solar Services in Lahore", description: "Explore solar panel installation, system setup, fault diagnosis, inverter and battery support, and panel maintenance for Lahore properties.", image: "/images/lahore-solar-rooftop-hero-v2.webp" },
  electrical: { label: "Electrical", title: "Electrical Services in Lahore", description: "Explore wiring, rewiring, fault diagnosis, distribution-board work, and fixture services for Lahore homes and businesses.", image: "/images/electrical-wiring-lahore.webp" },
  ac: { label: "AC", title: "AC Services in Lahore", description: "Explore AC installation, diagnosis, servicing, shifting, and leakage or cooling assessments across Lahore.", image: "/images/ac-installation-lahore.webp" },
} as const;

export function generateStaticParams() { return Object.keys(categories).map((category) => ({ category })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const data = categories[category as keyof typeof categories];
  if (!data) return {};
  return { title: data.title, description: data.description, alternates: { canonical: `/services/${category}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = categories[category as keyof typeof categories];
  if (!data) notFound();
  const items = servicesForCategory(category as ServiceCategory);

  return <PageShell mobileService={`${data.label} Services`}>
    <section className="serviceCategoryHero"><Image src={data.image} alt={`${data.label} service work in Lahore`} fill priority sizes="100vw" /><div aria-hidden="true" /><div className="container"><nav className="detailBreadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>→</span><Link href="/#services">Services</Link><span>→</span><span aria-current="page">{data.label}</span></nav><span className="eyebrow">Professional support · Lahore</span><h1>{data.title}</h1><p>{data.description}</p><WhatsAppLink service={`${data.label} Services`} position="category_hero">Contact on WhatsApp</WhatsAppLink></div></section>
    <section id="related-services" className="categoryServicesSection"><div className="container"><div className="servicesHeading"><span className="eyebrow">Our {data.label.toLowerCase()} services</span><h2>Choose the service that fits your requirement.</h2><p>Open a service page for its scope, common problems, process, images and service-specific FAQs.</p></div><div className="catalogGrid">{items.map((service) => <ServiceCatalogCard service={service} position="category_service_card" key={service.path} />)}</div></div></section>
    <section className="soft"><div className="container split"><div><span className="eyebrow">Assessment-led service</span><h2>Scope and quotation based on real conditions.</h2><p>Property access, existing condition, equipment compatibility, required materials and the complete work scope are reviewed before the final quotation.</p></div><div className="card"><span className="tag">Lahore coverage</span><h3>Homes, shops and offices</h3><p>Share your exact Lahore location and service requirement to confirm availability and the appropriate next step.</p></div></div></section>
  </PageShell>;
}
