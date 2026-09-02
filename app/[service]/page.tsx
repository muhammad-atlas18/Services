import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { services, type ServiceKey } from "@/lib/site";

const routeToService: Record<string, ServiceKey> = { "solar-services-lahore": "solar", "electrician-services-lahore": "electrical", "ac-services-lahore": "ac" };

export function generateStaticParams() { return Object.keys(routeToService).map((service) => ({ service })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: route } = await params; const key = routeToService[route]; if (!key) return {}; const service = services[key];
  return { title: service.title, description: `${service.description} Contact us on WhatsApp for a site-specific quotation.`, alternates: { canonical: service.href } };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: route } = await params; const key = routeToService[route]; if (!key) notFound(); const service = services[key];
  return <PageShell><section className="pageHero"><div className="container"><span className="eyebrow">{service.label} · Lahore</span><h1>{service.title}</h1><p className="lead">{service.description}</p><div className="actions"><WhatsAppLink service={service.label}>Discuss this service</WhatsAppLink></div></div></section><section><div className="container split"><div><span className="eyebrow">What we help with</span><h2>Clear scope before work begins.</h2><p>We assess the site or issue, explain the recommended work and provide the final quotation after reviewing the complete scope.</p><ul className="list">{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="card"><span className="tag">Quotation note</span><h3>Based on the real site conditions</h3><p>Final quotation depends on site condition, required materials, equipment compatibility and complete work scope.</p></div></div></section><section className="soft"><div className="container"><span className="eyebrow">Our process</span><h2>Assessment, quotation, work and handover.</h2><div className="steps" style={{ marginTop: "32px" }}>{[["Assess","We review the requirement and site details."],["Explain","You receive a clear recommended scope."],["Quote","The final quotation reflects the complete work."],["Complete","Work is tested before handover."],["Support","After-service guidance is provided where applicable."]].map(([title,text], i) => <div className="step" key={title}><div className="stepNumber">{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section><section><div className="container"><span className="eyebrow">Questions</span><h2>Before you request service.</h2><details className="faq"><summary>What information should I share on WhatsApp?</summary><p>Your Lahore area, photos where useful, a short description and how urgent the requirement is.</p></details><details className="faq"><summary>Can you give a final quotation before reviewing the work?</summary><p>A final quotation requires the site condition, materials and complete scope to be reviewed.</p></details></div></section><section className="final"><div className="container"><h2>Ready to discuss {service.label.toLowerCase()} work?</h2><p>Start a service-specific WhatsApp enquiry.</p><WhatsAppLink service={service.label}>WhatsApp about {service.label.toLowerCase()}</WhatsAppLink></div></section></PageShell>;
}
