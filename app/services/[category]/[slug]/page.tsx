import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ServiceImageCarousel } from "@/components/service-image-carousel";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceDetails } from "@/lib/service-details";
import { buildServiceFaqs, servicePageContent } from "@/lib/service-page-content";

const categoryLabels = { solar: "Solar", electrical: "Electrical", ac: "AC" } as const;
const processSteps = [
  ["Share Your Requirements", "Tell us your Lahore area, property type, service requirement and any useful history or photos."],
  ["Initial Assessment", "We review the information and confirm whether a site inspection or equipment check is required."],
  ["Inspection and Quotation", "Relevant conditions, access, compatibility and materials are assessed before the scope is quoted."],
  ["Service Completion", "The agreed work is completed according to the confirmed scope and accessible site conditions."],
  ["Testing and Handover", "Operation is checked and practical usage, care or next-step guidance is explained."],
] as const;

function WorkItemIcon({ item }: { item: string }) {
  const text = item.toLowerCase();
  if (/test|check|inspect|diagnos|assessment/.test(text)) return <svg viewBox="0 0 24 24"><path d="m4 13 4 4L20 5" /><path d="M20 12a8 8 0 1 1-5-7.3" /></svg>;
  if (/wire|cable|circuit|connection|socket|switch|board|breaker|earthing/.test(text)) return <svg viewBox="0 0 24 24"><path d="M13 2 5 14h6l-1 8 9-13h-6V2Z" /></svg>;
  if (/panel|solar|inverter|battery|energy/.test(text)) return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
  if (/ac|cool|indoor|outdoor|refrigerant|leak|drain|filter/.test(text)) return <svg viewBox="0 0 24 24"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" /><path d="m9 5 3-2 3 2M9 19l3 2 3-2M4.5 11 4 7.5 7.5 7M16.5 17l3.5-.5.5-3.5M4.5 13l-.5 3.5 3.5.5M16.5 7l3.5.5.5 3.5" /></svg>;
  if (/install|mount|fit|replace|repair|service|maintenance/.test(text)) return <svg viewBox="0 0 24 24"><path d="m14.7 6.3 3-3a4 4 0 0 1-5 5L6 15l-3 3 3 3 3-3 6.7-6.7a4 4 0 0 1 5-5l-3 3-3-3Z" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((key) => {
    const [category, slug] = key.split("/");
    return { category, slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const key = `${category}/${slug}`;
  const content = servicePageContent[key];
  if (!content) return {};
  return { title: content.pageTitle, description: content.metaDescription, alternates: { canonical: `/services/${key}` } };
}

export default async function Detail({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const key = `${category}/${slug}`;
  const detail = serviceDetails[key];
  const content = servicePageContent[key];
  if (!detail || !content) notFound();
  const categoryLabel = categoryLabels[detail.category];
  const categoryHref = `/services/${detail.category}`;
  const related = Object.entries(serviceDetails).filter(([path, item]) => path !== key && item.category === detail.category).slice(0, 3);
  const faqs = buildServiceFaqs(key, detail.title, detail.category);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pageUrl = `${baseUrl}/services/${key}`;
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: content.pageTitle, description: content.metaDescription, serviceType: detail.title, areaServed: { "@type": "City", name: "Lahore" }, provider: { "@type": "HomeAndConstructionBusiness", name: "Lahore Services", url: baseUrl }, url: pageUrl };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` }, { "@type": "ListItem", position: 3, name: categoryLabel, item: `${baseUrl}${categoryHref}` }, { "@type": "ListItem", position: 4, name: detail.title, item: pageUrl }] };

  const pageProcess = content.process || processSteps;

  return <PageShell mobileService={detail.title} mobileMessage={content.whatsappMessage}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <section className="serviceDetailHero"><Image className="serviceDetailBackground" src={detail.image} alt={detail.imageAlt} fill priority sizes="100vw" /><div className="serviceDetailOverlay" aria-hidden="true" /><div className="container serviceDetailHeroContent"><nav className="detailBreadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>→</span><Link href="/#services">Services</Link><span>→</span><Link href={categoryHref}>{categoryLabel}</Link><span>→</span><span aria-current="page">{detail.title}</span></nav><span className="eyebrow">{categoryLabel} services · Lahore</span><h1>{content.heroTitle || content.pageTitle}</h1><p>{content.introduction}</p><div className="detailHeroActions"><WhatsAppLink service={detail.title} message={content.whatsappMessage} position="detail_hero">Contact on WhatsApp</WhatsAppLink><Link className="button detailRelatedButton" href={`${categoryHref}#related-services`}>View {categoryLabel} Services</Link></div></div></section>

    <div className="serviceDetailRedesign">
      <section className="detailOverviewRedesign"><div className="detailWideContainer overviewRedesignGrid"><div className="overviewRedesignCopy"><span className="eyebrow">Service overview</span><h2>Planning the right work for your property.</h2><p>{detail.overview}</p><p>{content.introduction}</p><div className="overviewInfoGrid">{detail.checks.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div></div><aside className="enquiryCard" aria-label="Service enquiry"><span className="enquiryIcon" aria-hidden="true"><WorkItemIcon item={detail.title} /></span><span className="tag">Need this service?</span><h2>Discuss {detail.title.toLowerCase()}</h2><p>Share your requirement, property type and useful photos for an initial discussion.</p><div className="enquiryBadge">Lahore service area</div><div className="enquiryNote"><strong>Quotation after assessment</strong><span>Scope, access, materials and compatibility are reviewed first.</span></div><WhatsAppLink service={detail.title} message={content.whatsappMessage} position="overview_enquiry">Contact on WhatsApp</WhatsAppLink><div className="enquiryMeta"><span>Phone</span><strong>Number to be confirmed</strong><small>Response timing depends on current enquiries and service availability.</small></div></aside></div></section>

      <section className="detailFullSection detailSoft serviceIncludesSection"><div className="detailWideContainer"><div className="detailCenteredHeading"><span className="eyebrow">What this service includes</span><h2>Work matched to the confirmed scope.</h2><p>Each item is selected after the property, access, equipment and existing condition have been reviewed.</p></div><div className="includedServiceGrid">{content.workItems.map((item) => <article className="includedServiceCard" key={item}><span className="includedServiceIcon" aria-hidden="true"><WorkItemIcon item={item} /></span><h3>{item}</h3><p>Reviewed and completed where it forms part of the confirmed service scope.</p></article>)}</div></div></section>

      <section className="detailFullSection"><div className="detailWideContainer problemsSplit"><div className="problemsImage"><ServiceImageCarousel images={detail.gallery} title={detail.title} /></div><div className="problemsContent"><span className="eyebrow">Common problems &amp; warning signs</span><h2>Situations we can assess.</h2><p>These signs help explain the requirement, but the underlying cause still needs proper inspection before work is recommended.</p><div className="problemChecklist">{content.problems.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div></div></div></section>

      <section className="detailFullSection detailSoft processRedesign"><div className="detailWideContainer"><div className="detailCenteredHeading"><span className="eyebrow">How the service works</span><h2>Clear steps from enquiry to handover.</h2><p>The process stays focused on the actual requirement, confirmed scope and appropriate testing.</p></div><div className="processHorizontal">{pageProcess.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="detailInfoSection"><div className="detailWideContainer"><div className="importantInfoPanel"><span className="importantInfoIcon" aria-hidden="true">i</span><div><span className="eyebrow">Important information</span><h2>Assessment keeps the recommendation appropriate.</h2>{content.safetyNotice && <p><strong>Safety:</strong> {content.safetyNotice}</p>}<div className="considerationGrid">{content.considerations.map((item) => <article key={item}><span aria-hidden="true">•</span><p>{item}</p></article>)}</div><p className="infoQuotation">Final quotation depends on site condition, required materials, equipment compatibility, access and the complete agreed scope. No fixed price or completion time is shown before these details are confirmed.</p></div></div></div></section>

      <section className="detailFullSection detailSoft"><div className="detailWideContainer"><div className="detailCenteredHeading"><span className="eyebrow">Why choose this service</span><h2>A clear, requirement-led approach.</h2></div><div className="whyServiceGrid">{["Requirement-Based Assessment", "Clear Work-Scope Explanation", "Suitable Tools and Methods", "Testing After Approved Work", "Residential and Commercial Support", "Lahore-Focused Service"].map((item) => <article key={item}><span aria-hidden="true"><WorkItemIcon item={item} /></span><h3>{item}</h3><p>Applied according to the confirmed service requirement and accessible site conditions.</p></article>)}</div></div></section>

      <section className="detailFullSection faqRedesignSection"><div className="detailWideContainer faqRedesignGrid"><div className="faqRedesignIntro"><span className="eyebrow">Service questions</span><h2>Frequently asked questions about {detail.title.toLowerCase()}.</h2><p>Review the common questions or contact us with your Lahore area and specific requirement.</p><WhatsAppLink service={detail.title} message={content.whatsappMessage} position="faq_prompt">Ask on WhatsApp</WhatsAppLink></div><div className="faqRedesignList">{faqs.map((faq) => <details className="faq" key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="detailFullSection detailSoft relatedRedesignSection" id="related-services"><div className="detailWideContainer"><div className="detailCenteredHeading"><span className="eyebrow">Related {categoryLabel} services</span><h2>Explore other services for your property.</h2></div><div className="relatedServiceGrid">{related.map(([path, item]) => { const relatedContent = servicePageContent[path]; return <article className="relatedServiceCard" key={path}><div className="relatedServiceImage"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="relatedServiceBody"><span className="relatedServiceIcon" aria-hidden="true"><WorkItemIcon item={item.title} /></span><h3>{item.title}</h3><p>{item.summary}</p><div className="relatedServiceActions"><Link className="button secondary" href={`/services/${path}`}>View Details</Link><WhatsAppLink service={item.title} message={relatedContent.whatsappMessage} position="related_service">Contact on WhatsApp</WhatsAppLink></div></div></article>; })}</div></div></section>

      <section className="detailFinalBanner"><div className="detailWideContainer detailFinalInner"><div><span className="eyebrow">Lahore service support</span><h2>Need Professional Help With This Service?</h2><p>Share your requirements and Lahore location with us on WhatsApp for an initial discussion and service assessment.</p></div><div className="detailFinalActions"><WhatsAppLink service={detail.title} message={content.whatsappMessage} position="detail_final_cta">Contact on WhatsApp</WhatsAppLink><Link className="button detailRelatedButton" href={`${categoryHref}#related-services`}>Explore Related Services</Link></div></div></section>
    </div>
  </PageShell>;
}
