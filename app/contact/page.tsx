import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> { const urdu = (await headers()).get("x-gharmahir-locale") === "ur"; return { title:{ absolute:urdu ? "رابطہ کریں | لاہور میں تکنیکی خدمات" : "Contact Us | Book Technical Services in Lahore" }, description:urdu ? "لاہور میں سولر، الیکٹریکل، اے سی اور گھریلو آلات کی خدمات کے لیے ہماری ٹیم سے رابطہ کریں۔" : "Contact our team for solar, electrical, AC and home-appliance services in Lahore. Submit your service requirements through our online enquiry form.", alternates:{ canonical:urdu ? "/ur/contact" : "/contact", languages:{ en:"/contact", ur:"/ur/contact", "x-default":"/contact" } } }; }

const information = [
  ["Service Area","Currently serving residential and commercial customers across Lahore."],
  ["Available Services","Solar, Electrical, AC and Home Appliance Services"],
  ["Response Process","After receiving your enquiry, our team will review the service details and contact you regarding availability and the next steps."],
  ["Important Note","Service availability and quotations depend on the job requirements, property location, inspection requirements and technician availability."],
];

const informationUrdu = [["خدمات کا علاقہ","فی الحال لاہور بھر میں رہائشی اور کاروباری صارفین کو خدمات فراہم کی جا رہی ہیں۔"],["دستیاب خدمات","سولر، الیکٹریکل، اے سی اور گھریلو برقی آلات کی خدمات"],["جواب دینے کا طریقہ","درخواست موصول ہونے کے بعد ہماری ٹیم تفصیلات دیکھ کر دستیابی، معائنے اور اگلے مرحلے کے متعلق رابطہ کرے گی۔"],["اہم نوٹ","سروس کی دستیابی اور کوٹیشن کام کی ضرورت، پراپرٹی کے مقام، معائنے اور ٹیکنیشن کی دستیابی پر منحصر ہے۔"]];
export default async function ContactPage() {
  const urdu = (await headers()).get("x-gharmahir-locale") === "ur"; const info = urdu ? informationUrdu : information;
  return <PageShell>
    <section className="contactHero"><Image className="contactHeroImage" src="/images/contact-service-team-hero.png" alt={urdu ? "صارفین کی مدد کے لیے تیار لاہور کی تکنیکی سروس ٹیم" : "Lahore technical service team ready to assist customers"} fill priority quality={88} sizes="100vw" /><div className="contactHeroOverlay" aria-hidden="true" /><div className="container contactHeroInner"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Contact Us</span></nav><span className="eyebrow">Service enquiries</span><h1>Contact Our Service Team</h1><p>{urdu ? "مطلوبہ سروس اور متعلقہ تفصیلات بتائیں۔ ہماری ٹیم درخواست کا جائزہ لے کر دستیابی، معائنے اور اگلے مرحلے کے متعلق آپ سے رابطہ کرے گی۔" : "Tell us what service you need and share the relevant details. Our team will review your enquiry and contact you regarding availability, inspection and the next steps."}</p></div></section>
    <section className="contactPage"><div className="container contactLayout"><div className="contactFormPanel"><span className="eyebrow">Enquiry form</span><h2>Send Us Your Enquiry</h2><p>{urdu ? "درست رابطہ اور سروس کی معلومات کے ساتھ فارم مکمل کریں۔ ضروری خانے ستارے کے نشان سے واضح ہیں۔" : "Complete the form with accurate contact and service information. Required fields are marked with an asterisk."}</p><ContactForm/></div><aside className="contactInformation" aria-label="Service enquiry information"><span className="contactInfoLabel">Before you submit</span><h2>What happens next?</h2><div>{info.map(([title,text],index)=><article key={title}><span aria-hidden="true">{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className="contactPrivacyNote"><strong>Your information matters.</strong><p>{urdu ? <>درخواست کی معلومات صرف جائزے اور جواب کے لیے استعمال ہوتی ہیں۔ ہماری <Link href="/privacy-policy">رازداری کی پالیسی</Link> پڑھیں۔</> : <>Enquiry details are used to review and respond to your request. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</>}</p></div></aside></div></section>
  </PageShell>;
}
