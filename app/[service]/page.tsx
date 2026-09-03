import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceDetails } from "@/lib/service-details";
import { services, type ServiceKey } from "@/lib/site";

const routeToService: Record<string, ServiceKey> = { "solar-services-lahore": "solar", "electrician-services-lahore": "electrical", "ac-services-lahore": "ac" };

export function generateStaticParams() { return Object.keys(routeToService).map((service) => ({ service })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: route } = await params;
  const key = routeToService[route];
  if (!key) return {};
  const service = services[key];
  return { title: service.title, description: `${service.description} Contact us on WhatsApp for a site-specific quotation.`, alternates: { canonical: service.href } };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: route } = await params;
  const key = routeToService[route];
  if (!key) notFound();
  const service = services[key];
  const detailPages = Object.entries(serviceDetails).filter(([, detail]) => detail.category === key);

  return <PageShell>
    <section className="pageHero categoryHero"><div className="container"><span className="eyebrow">{service.label} · Lahore</span><h1>{service.title}</h1><p className="lead">{service.description}</p></div></section>
    <section className="categoryServicesSection"><div className="container"><div className="categoryServicesHeading"><span className="eyebrow">Our {service.label.toLowerCase()} services</span><h2>Choose the service that matches your requirement.</h2><p>Each page explains the usual scope, common requirements, assessment checks and handover process.</p></div><div className="categoryServiceGrid">{detailPages.map(([path, detail]) => <article className="categoryServiceCard" key={path}><Link className="categoryServiceLink" href={`/services/${path}`} aria-label={`View ${detail.title}`} /><div className="categoryServiceImage"><Image src={detail.image} alt={detail.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className="categoryServiceBody"><span className="tag">{service.label} service</span><h3>{detail.title}</h3><p>{detail.summary}</p><span className="categoryServiceAction">View service details →</span></div></article>)}</div></div></section>
    <section className="soft"><div className="container split"><div><span className="eyebrow">Assessment first</span><h2>Clear scope before work begins.</h2><p>We review the site or issue, explain the recommended work and confirm the quotation basis after understanding the complete requirement.</p><ul className="list"><li>Relevant site and equipment checks</li><li>Work scope explained before starting</li><li>Testing and practical handover guidance</li></ul></div><div className="card"><span className="tag">Quotation note</span><h3>Based on actual site conditions</h3><p>Final quotation depends on site condition, required materials, equipment compatibility, access and complete work scope.</p></div></div></section>
    <section><div className="container"><span className="eyebrow">Questions</span><h2>Before you request service.</h2><details className="faq"><summary>What information should I share?</summary><p>Your Lahore area, photos where useful, a short description and how urgent the requirement is.</p></details><details className="faq"><summary>Can you give a final quotation before reviewing the work?</summary><p>A final quotation requires the site condition, materials and complete scope to be reviewed.</p></details></div></section>
    <section className="final"><div className="container"><h2>Ready to discuss {service.label.toLowerCase()} work?</h2><p>Start a service-specific enquiry with the relevant details.</p><WhatsAppLink service={service.label}>WhatsApp about {service.label.toLowerCase()}</WhatsAppLink></div></section>
  </PageShell>;
}
