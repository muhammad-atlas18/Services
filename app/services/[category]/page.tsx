import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { ServiceCatalogCard } from "@/components/service-catalog-card";
import { servicesForCategory, type ServiceCategory } from "@/lib/service-catalog";
import { headers } from "next/headers";
import { localizeService } from "@/i18n/service-urdu";
import { serviceDetails } from "@/lib/service-details";
import { servicePageContent } from "@/lib/service-page-content";

const categories = {
  solar: { label: "Solar", title: "Solar Services in Lahore", description: "Explore solar panel installation, system setup, fault diagnosis, inverter and battery support, and panel maintenance for Lahore properties.", image: "/images/lahore-solar-rooftop-hero-v2.webp" },
  electrical: { label: "Electrical", title: "Electrical Services in Lahore", description: "Explore wiring, rewiring, fault diagnosis, distribution-board work, and fixture services for Lahore homes and businesses.", image: "/images/electrical-wiring-lahore.webp" },
  ac: { label: "AC", title: "AC Services in Lahore", description: "Explore AC installation, diagnosis, servicing, shifting, and leakage or cooling assessments across Lahore.", image: "/images/ac-installation-lahore.webp" },
  "home-appliances": { label: "Home Appliance", title: "Home Appliance Repair Services in Lahore", description: "Get professional diagnosis and repair support for essential household appliances, with clear fault assessment and service recommendations.", image: "/images/home-appliances/category-hero.webp" },
} as const;

const categoryProcess = [
  ["Choose a service", "Open the relevant sub-service page and review the available scope."],
  ["Share your requirement", "Send your Lahore area, property type, issue and useful photographs."],
  ["Assessment", "The site, access, existing condition and equipment compatibility are reviewed."],
  ["Confirm the scope", "Recommended work and quotation basis are explained before work starts."],
  ["Complete and test", "Approved work is completed and relevant operation is checked before handover."],
] as const;

const categoryFaqs = [
  ["Which Lahore areas are covered?", "Service is available across confirmed Lahore areas. Share your exact location so access and availability can be checked."],
  ["How do I choose the correct service?", "Select the service closest to your requirement. If the cause is unclear, share the symptoms and available photos for initial guidance."],
  ["Can I receive a final quotation before inspection?", "A final quotation depends on site condition, access, materials, equipment compatibility and the complete confirmed scope."],
  ["Do you support homes and commercial properties?", "Requirements for homes, offices and shops can be reviewed where the location, access and requested work are confirmed."],
  ["What information should I send on WhatsApp?", "Send the selected service name, Lahore area, property type, a short description and clear photos or error information where useful."],
] as const;

const urduCategories = {
  solar:{ label:"سولر", title:"لاہور میں سولر سروسز", description:"لاہور میں سولر پینل کی تنصیب، سسٹم سیٹ اَپ، خرابی کی تشخیص، اِنورٹر، بیٹری، صفائی اور دیکھ بھال کی خدمات دیکھیں۔" },
  electrical:{ label:"الیکٹریکل", title:"لاہور میں الیکٹریکل سروسز", description:"گھروں اور کاروباری جگہوں کے لیے نئی وائرنگ، ری وائرنگ، خرابی کی تشخیص، ڈسٹری بیوشن بورڈ اور برقی فٹنگز کی خدمات۔" },
  ac:{ label:"اے سی", title:"لاہور میں اے سی سروسز", description:"اے سی کی تنصیب، مرمت، دیکھ بھال، منتقلی، لیکیج اور کولنگ کی تشخیص کے لیے پیشہ ورانہ معاونت۔" },
  "home-appliances":{ label:"گھریلو برقی آلات", title:"لاہور میں گھریلو برقی آلات کی مرمت", description:"باورچی خانے اور لانڈری کے ضروری برقی آلات کی خرابی کی تشخیص اور مرمت کے لیے پیشہ ورانہ سروس۔" }
} as const;
const urduProcess = [["سروس منتخب کریں","متعلقہ ذیلی سروس کا صفحہ کھولیں اور دستیاب کام کی تفصیل دیکھیں۔"],["اپنی ضرورت بتائیں","لاہور میں اپنا علاقہ، پراپرٹی کی قسم، مسئلہ اور مفید تصاویر شیئر کریں۔"],["جائزہ","موجودہ حالت، محفوظ رسائی اور آلات کی مطابقت دیکھی جاتی ہے۔"],["کام کی تصدیق","کام شروع ہونے سے پہلے تجویز کردہ دائرۂ کار اور کوٹیشن واضح کی جاتی ہے۔"],["تکمیل اور جانچ","منظور شدہ کام مکمل کرکے حوالگی سے پہلے ضروری جانچ کی جاتی ہے۔"]] as const;
const urduFaqs = [["لاہور کے کون سے علاقے شامل ہیں؟","ہم لاہور کے مختلف تصدیق شدہ علاقوں میں خدمات فراہم کرتے ہیں۔ دستیابی جاننے کے لیے اپنا درست مقام شیئر کریں۔"],["درست سروس کیسے منتخب کروں؟","اپنی ضرورت سے قریب ترین سروس منتخب کریں۔ وجہ واضح نہ ہو تو علامات اور تصاویر ابتدائی رہنمائی کے لیے بھیجیں۔"],["کیا معائنے سے پہلے حتمی کوٹیشن مل سکتی ہے؟","حتمی کوٹیشن موقع کی حالت، رسائی، سامان، مطابقت اور مکمل کام پر منحصر ہوتی ہے۔"],["کیا گھروں اور کاروباری جگہوں دونوں کے لیے سروس ہے؟","مقام، رسائی اور مطلوبہ کام کی تصدیق کے بعد گھروں، دفاتر اور دکانوں کی ضروریات دیکھی جا سکتی ہیں۔"],["واٹس ایپ پر کون سی معلومات بھیجوں؟","منتخب سروس، لاہور کا علاقہ، پراپرٹی کی قسم، مسئلے کی مختصر تفصیل اور مفید تصاویر بھیجیں۔"]] as const;

export function generateStaticParams() { return Object.keys(categories).map((category) => ({ category })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const data = categories[category as keyof typeof categories];
  if (!data) return {};
  const isUrdu = (await headers()).get("x-gharmahir-locale") === "ur"; const localized = isUrdu ? { ...data, ...urduCategories[category as keyof typeof urduCategories] } : data;
  return { title: localized.title, description: localized.description, alternates: { canonical:isUrdu ? `/ur/services/${category}` : `/services/${category}`, languages:{ en:`/services/${category}`, ur:`/ur/services/${category}`, "x-default":`/services/${category}` } } };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const originalData = categories[category as keyof typeof categories];
  if (!originalData) notFound();
  const isUrdu = (await headers()).get("x-gharmahir-locale") === "ur"; const data = isUrdu ? { ...originalData, ...urduCategories[category as keyof typeof urduCategories] } : originalData;
  const items = servicesForCategory(category as ServiceCategory);
  const process = isUrdu ? urduProcess : categoryProcess; const faqs = isUrdu ? urduFaqs : categoryFaqs;

  return <PageShell mobileService={`${data.label} Services`}>
    <section className="serviceCategoryHero"><Image src={data.image} alt={`${data.label} service work in Lahore`} fill priority sizes="100vw" /><div aria-hidden="true" /><div className="container"><nav className="detailBreadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>→</span><Link href="/#services">Services</Link><span>→</span><span aria-current="page">{data.label}</span></nav><span className="eyebrow">Professional support · Lahore</span><h1>{data.title}</h1><p>{data.description}</p></div></section>
    <section id="related-services" className="categoryServicesSection"><div className="container"><div className="servicesHeading"><span className="eyebrow">Our {data.label.toLowerCase()} services</span><h2>Choose the service that fits your requirement.</h2><p>Open a service page for its scope, common problems, process, images and service-specific FAQs.</p></div><div className="catalogGrid">{items.map((service) => { const detail = serviceDetails[service.path]; const content = servicePageContent[service.path]; const localized = isUrdu ? localizeService(service.path, detail, content) : null; return <ServiceCatalogCard service={localized ? { ...service, title:localized.detail.title, summary:localized.detail.summary, imageAlt:localized.detail.imageAlt } : service} position="category_service_card" key={service.path} />; })}</div></div></section>
    <section className="categoryProcessSection"><div className="container"><div className="servicesHeading"><span className="eyebrow">Our process</span><h2>How the service process works.</h2><p>Clear steps keep the requirement, assessment and approved scope organised.</p></div><div className="categoryProcessGrid">{process.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="categoryInfoSection"><div className="container categoryInfoGrid"><div><span className="eyebrow">Important information</span><h2>Scope and quotation based on real conditions.</h2><p>Property access, existing condition, equipment compatibility, required materials and the complete work scope are reviewed before the final quotation.</p></div><div className="categoryInfoCard"><span className="tag">Lahore coverage</span><h3>Homes, shops and offices</h3><p>Share your exact Lahore location and selected {data.label.toLowerCase()} service to confirm availability and the appropriate next step.</p></div></div></section>
    <section className="categoryFaqSection"><div className="container categoryFaqGrid"><div><span className="eyebrow">Useful answers</span><h2>{data.label} service questions.</h2><p>Review these common questions before selecting a service or starting an enquiry.</p></div><div>{faqs.map(([question, answer]) => <details className="faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="categoryFinalCta"><div className="container"><span className="eyebrow">Need professional support?</span><h2>Discuss your {data.label.toLowerCase()} requirement in Lahore.</h2><p>Share the selected service, your area and useful details for an initial discussion and assessment.</p><WhatsAppLink service={`${data.label} Services`} position="category_final_cta">Contact on WhatsApp</WhatsAppLink></div></section>
  </PageShell>;
}
