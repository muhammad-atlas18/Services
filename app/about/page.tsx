import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> { const urdu = (await headers()).get("x-gharmahir-locale") === "ur"; const title = urdu ? "GharMahir کے بارے میں | لاہور میں تکنیکی خدمات" : "About GharMahir | Solar, Electrical, AC & Appliance Services Lahore"; const description = urdu ? "لاہور میں رہائشی اور کاروباری صارفین کے لیے ہماری سولر، الیکٹریکل، اے سی اور گھریلو آلات کی پیشہ ورانہ خدمات کے بارے میں جانیں۔" : "Learn about our professional solar, electrical, AC and home-appliance services for residential and commercial customers across Lahore."; return { title:{ absolute:title }, description, alternates:{ canonical:urdu ? "/ur/about" : "/about", languages:{ en:"/about", ur:"/ur/about", "x-default":"/about" } }, openGraph:{ title, description, url:urdu ? "/ur/about" : "/about", images:[{ url:"/images/about-team-lahore-v2.jpg", alt:urdu ? "لاہور میں تکنیکی سروس کے ماہرین" : "Four Pakistani technical service professionals on a Lahore rooftop" }] } }; }

const services = [
  { key: "solar", title: "Solar Services", href: "/services/solar", description: "From system planning and panel installation to connections, washing, troubleshooting, repair and ongoing maintenance, we provide support throughout the solar-system lifecycle." },
  { key: "electrical", title: "Electrical Services", href: "/services/electrical", description: "We handle new wiring, old-wiring repair, rewiring, fault diagnosis, distribution boards, circuit breakers, switches, sockets, lights and fan-related electrical work." },
  { key: "ac", title: "AC Services", href: "/services/ac", description: "Our AC services include installation, repair, fault diagnosis, servicing, maintenance, shifting, reinstallation and cooling or leakage inspection." },
  { key: "appliance", title: "Home Appliance Services", href: "/services/home-appliances", description: "We provide diagnosis and repair support for refrigerators, freezers, washing machines, microwave ovens, water dispensers, electric ovens, cooking ranges and dishwashers." },
];

const steps = [
  ["Select a Service", "Choose the service that best matches your installation, maintenance or repair requirement."],
  ["Contact Us on WhatsApp", "The selected service is automatically included in your WhatsApp message, so you can send your enquiry immediately."],
  ["Discuss the Requirement", "Share the necessary property, appliance or fault details so the service requirement can be assessed properly."],
  ["Arrange the Service", "Availability, inspection, visit requirements and the quotation process are confirmed before work proceeds."],
];

const reasons = [
  ["Lahore coverage", "A service journey designed around residential and commercial enquiries across Lahore."],
  ["Essential services", "Solar, electrical, AC and home-appliance support available from one clear directory."],
  ["Relevant enquiries", "The selected service is automatically included in the WhatsApp message."],
  ["Clear communication", "Requirements and the next step are discussed before approved work begins."],
  ["Practical support", "Installation, maintenance, diagnosis and repair requirements are handled by service type."],
  ["Property flexibility", "Enquiries can be made for homes, shops, offices and other suitable properties."],
  ["Mobile-friendly", "Service selection and WhatsApp contact work smoothly across screen sizes."],
  ["Responsible quotations", "No hidden online prices or misleading instant estimates; scope is reviewed first."],
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "solar") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>;
  if (type === "electrical") return <svg viewBox="0 0 24 24"><path d="m13 2-8 12h6l-1 8 9-13h-6V2Z"/></svg>;
  if (type === "ac") return <svg viewBox="0 0 24 24"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>;
  return <svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 9h14M9 6h.01M9 13h.01"/></svg>;
}

export default function AboutPage() {
  return <PageShell mobileSourcePage="about">
    <section className="aboutHero"><Image src="/images/about-team-lahore-v2.jpg" alt="Four Pakistani solar, electrical, AC and appliance service technicians on a Lahore rooftop" fill priority sizes="100vw" /><div className="aboutHeroOverlay" aria-hidden="true"/><div className="container aboutHeroContent"><span className="eyebrow">About GharMahir</span><h1>Reliable Technical Services for Homes and Businesses in Lahore</h1><p>We provide dependable solar, electrical, AC and home-appliance services with a focus on professional workmanship, clear communication and practical solutions.</p><div className="aboutHeroActions"><Link className="button primary" href="/#services">Explore Our Services</Link></div></div></section>

    <section className="aboutIntro"><div className="container aboutIntroGrid"><div><span className="eyebrow">Who We Are</span><h2>Your Local Partner for Essential Technical Services</h2><p>We are a Lahore-focused technical services provider helping homeowners, businesses and property managers find practical solutions for their solar, electrical, air-conditioning and home-appliance requirements.</p><p>Our goal is to make it easier for customers to request the right service, explain their requirements and connect with a suitable technician through WhatsApp. From a new solar installation to electrical fault diagnosis, AC maintenance or appliance repair, every enquiry is handled according to the selected service.</p><p>We understand that technical problems can disrupt everyday life. That is why we focus on responsive communication, careful inspection and clear guidance before work begins. Service requirements and quotations are discussed according to the condition, scope and location of each job.</p></div><aside className="aboutSummary"><span>Technical support in one place</span><h3>Choose the right service with less uncertainty.</h3><div className="aboutSummaryList">{services.map((item, index) => <Link href={item.href} key={item.key}><b>{String(index + 1).padStart(2,"0")}</b><span>{item.title}</span><span aria-hidden="true">→</span></Link>)}</div><p>Final availability and scope are confirmed for the actual Lahore location and requirement.</p></aside></div></section>

    <section className="aboutServices"><div className="container"><div className="aboutCenteredHeading"><span className="eyebrow">Our Main Services</span><h2>Services We Provide</h2><p>Our services cover essential installation, maintenance, diagnosis and repair requirements for residential and commercial properties across Lahore.</p></div><div className="aboutServiceGrid">{services.map((item) => <article className={`aboutServiceCard about-${item.key}`} key={item.key}><span className="aboutServiceIcon" aria-hidden="true"><ServiceIcon type={item.key}/></span><h3>{item.title}</h3><p>{item.description}</p><Link className="button secondary" href={item.href}>See Details</Link></article>)}</div></div></section>

    <section className="aboutProcess"><div className="container"><div className="aboutCenteredHeading"><span className="eyebrow">A clear service journey</span><h2>How We Work</h2><p>Four straightforward steps help keep the enquiry, assessment and service arrangement organised.</p></div><div className="aboutSteps">{steps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="aboutReasons"><div className="container aboutReasonsLayout"><div><span className="eyebrow">Service built around clarity</span><h2>Why Customers Contact Us</h2><p>A practical website experience helps customers identify a service, understand its scope and start a relevant enquiry without unsupported promises.</p></div><div className="aboutReasonGrid">{reasons.map(([title, text]) => <article key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="aboutArea"><div className="container aboutAreaInner"><div className="aboutAreaMark" aria-hidden="true"><span>GM</span></div><div><span className="eyebrow">Our Service Area</span><h2>Serving Lahore</h2><p>Our website currently focuses on customers across Lahore. Service availability may depend on the customer’s location, the type of work required and technician availability.</p><p>Customers can contact us through WhatsApp, select the required service and share their location details for confirmation.</p></div></div></section>

    <section className="aboutFinal"><div className="container"><span className="eyebrow">Start with the right service</span><h2>Need Help With a Technical Service?</h2><p>Explore our available services to find the right option for your requirement in Lahore.</p><div className="aboutFinalActions"><Link className="button secondary" href="/#services">Explore Our Services</Link></div></div></section>
  </PageShell>;
}
