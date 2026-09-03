import { PageShell } from "@/components/page-shell";
import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { MainServiceCategoryCard } from "@/components/main-service-category-card";
import { CustomerReviewCarousel } from "@/components/customer-review-carousel";
import { categoryOrder, getCategoryMeta, serviceCatalog } from "@/lib/service-catalog";
import { headers } from "next/headers";
import { HomeProjects } from "@/components/home-projects";

const heroSearchItems = [
  ...categoryOrder.map((category) => { const item = getCategoryMeta(category); return { title: item.label, description: item.intro, href: item.route, category: "Main service" }; }),
  ...serviceCatalog.map((item) => ({ title: item.title, description: item.summary, href: item.route, category: getCategoryMeta(item.category).label })),
];

const processSteps = [
  { number: "01", title: "Choose your service", text: "Select Solar, Electrical or AC and open the relevant service page to understand what is covered." },
  { number: "02", title: "Share the requirement", text: "Tell us your Lahore area, the issue, preferred timing and share clear photos when they can help." },
  { number: "03", title: "Assessment", text: "We review the requirement and, where needed, arrange a site visit before recommending the right work." },
  { number: "04", title: "Scope & quotation", text: "You receive a clear scope based on site condition, required materials and equipment compatibility." },
  { number: "05", title: "Work & handover", text: "The agreed work is completed, tested and explained before handover, with relevant after-service guidance." },
];

const homeFaqs = [
  ["Which areas of Lahore do you serve?", "We work across Lahore, including DHA, Gulberg, Johar Town, Model Town, Wapda Town, Bahria Town, Valencia, Faisal Town, Garden Town, Cantt, Allama Iqbal Town and Township. You can share your exact location to confirm service availability."],
  ["Which services are available?", "The website covers solar installation and support, electrical wiring and fault work, plus AC installation, repair and maintenance."],
  ["Can I get a final quotation immediately?", "A final quotation depends on the actual site condition, materials, equipment compatibility and complete work scope."],
  ["What should I share before an assessment?", "Share your Lahore area, a short description of the requirement, preferred timing and clear photos where useful."],
  ["Do you handle both home and business requirements?", "The service scope can cover homes, shops and offices where the location, access and requested work have been confirmed."],
  ["Are materials included in the service?", "Required materials are identified after assessment and should be clearly included in the agreed scope and quotation before work begins."],
  ["How long does a service visit take?", "Timing varies by the fault, access, materials and complete work scope. The expected next step can be explained after the requirement is reviewed."],
  ["Can I request an assessment without photos?", "Yes. Photos are helpful for initial context but are not a replacement for an on-site assessment when the condition or complete scope cannot be confirmed remotely."],
  ["Will you check compatibility with my existing equipment?", "Existing panels, inverter, batteries, breakers, wiring or AC equipment should be reviewed before compatible replacement parts or additions are confirmed."],
  ["What happens if additional work is found?", "Any additional requirement should be explained and added to the agreed scope before that extra work is started."],
];

const urduProcess = [{number:"01",title:"اپنی سروس منتخب کریں",text:"سولر، الیکٹریکل، اے سی یا گھریلو آلات کی مطلوبہ سروس منتخب کرکے اس کی مکمل تفصیل دیکھیں۔"},{number:"02",title:"اپنی ضرورت بتائیں",text:"لاہور میں اپنا علاقہ، مسئلہ، ترجیحی وقت اور مفید تصاویر شیئر کریں۔"},{number:"03",title:"جائزہ",text:"ہم ضرورت کا جائزہ لیتے ہیں اور ضروری ہو تو مناسب کام تجویز کرنے سے پہلے موقع کا معائنہ طے کرتے ہیں۔"},{number:"04",title:"کام اور کوٹیشن",text:"موجودہ حالت، مطلوبہ سامان اور مطابقت کے مطابق واضح دائرۂ کار اور کوٹیشن دی جاتی ہے۔"},{number:"05",title:"تکمیل اور حوالگی",text:"منظور شدہ کام مکمل کرکے جانچ کی جاتی ہے اور ضروری رہنمائی کے ساتھ حوالہ کیا جاتا ہے۔"}];
const urduFaqs = [["آپ لاہور کے کن علاقوں میں خدمات فراہم کرتے ہیں؟","ہم DHA، گلبرگ، جوہر ٹاؤن، ماڈل ٹاؤن، واپڈا ٹاؤن، بحریہ ٹاؤن، ویلنشیا، فیصل ٹاؤن، گارڈن ٹاؤن، کینٹ، علامہ اقبال ٹاؤن اور ٹاؤن شپ سمیت لاہور بھر میں کام کرتے ہیں۔"],["کون سی خدمات دستیاب ہیں؟","ویب سائٹ پر سولر، الیکٹریکل، اے سی اور گھریلو برقی آلات کی تنصیب، مرمت اور دیکھ بھال کی خدمات دستیاب ہیں۔"],["کیا فوری حتمی کوٹیشن مل سکتی ہے؟","حتمی کوٹیشن موقع کی اصل حالت، سامان، آلات کی مطابقت اور مکمل کام پر منحصر ہوتی ہے۔"],["جائزے سے پہلے کیا معلومات دینی چاہییں؟","اپنا لاہور کا علاقہ، مسئلے کی مختصر تفصیل، ترجیحی وقت اور جہاں مفید ہو واضح تصاویر شیئر کریں۔"],["کیا گھروں اور کاروباری جگہوں دونوں کے لیے کام کرتے ہیں؟","مقام، رسائی اور مطلوبہ کام کی تصدیق کے بعد گھروں، دکانوں اور دفاتر کی ضروریات دیکھی جا سکتی ہیں۔"],["کیا سامان سروس میں شامل ہوتا ہے؟","ضروری سامان جائزے کے بعد شناخت کرکے کام شروع ہونے سے پہلے منظور شدہ کوٹیشن میں واضح کیا جاتا ہے۔"],["سروس وزٹ میں کتنا وقت لگتا ہے؟","مدت خرابی، رسائی، سامان اور مکمل کام کے مطابق مختلف ہوتی ہے۔ ضرورت کے جائزے کے بعد اگلا مرحلہ بتایا جاتا ہے۔"],["کیا تصاویر کے بغیر جائزہ مانگ سکتا ہوں؟","جی ہاں۔ تصاویر ابتدائی معلومات میں مدد دیتی ہیں، لیکن جہاں مکمل حالت واضح نہ ہو وہاں موقع کا معائنہ ضروری ہو سکتا ہے۔"],["کیا موجودہ آلات کی مطابقت چیک ہوگی؟","نئے پرزے یا اضافے تجویز کرنے سے پہلے موجودہ پینل، اِنورٹر، بیٹری، بریکر، وائرنگ یا اے سی آلات کا جائزہ لیا جاتا ہے۔"],["اگر اضافی کام سامنے آئے تو کیا ہوگا؟","اضافی کام شروع کرنے سے پہلے اس کی وجہ اور دائرۂ کار واضح کرکے منظوری لی جاتی ہے۔"]] as const;

export default async function HomePage() {
  const locale = (await headers()).get("x-gharmahir-locale") === "ur" ? "ur" : "en"; const isUrdu = locale === "ur"; const steps = isUrdu ? urduProcess : processSteps; const faqs = isUrdu ? urduFaqs : homeFaqs;
  return <PageShell>
    <HomeHeroCarousel searchItems={heroSearchItems} locale={locale} />
    <section id="services" className="mainCategoriesSection"><div className="container"><div className="catalogueIntro"><span className="eyebrow">What we do</span><h2>Our Services</h2><p>{isUrdu ? "لاہور میں سولر، الیکٹریکل، اے سی اور گھریلو آلات کی مکمل معاونت دیکھنے کے لیے مرکزی سروس منتخب کریں۔" : "Choose a main service category to explore complete Solar, Electrical or AC support across Lahore."}</p></div><div className="mainCategoryGrid">{categoryOrder.map((category) => <MainServiceCategoryCard category={category} locale={locale} key={category} />)}</div></div></section>
    <section className="soft processSection"><div className="container"><div className="processIntro landingSectionHeading"><div><span className="eyebrow">Our process</span><h2>How It Works</h2></div><p>{isUrdu ? "ابتدائی تفصیل سے کام کی حوالگی تک واضح طریقۂ کار۔ کام شروع ہونے سے پہلے دائرۂ کار، کوٹیشن اور اگلا مرحلہ واضح رکھا جاتا ہے۔" : "Clear service from first detail to final handover. Our process keeps the scope, quotation and next step clear before work begins."}</p></div><div className="processGrid">{steps.map((step) => <article className="processCard" key={step.number}><span className="processNumber">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="processNote"><strong>{isUrdu ? "کام کی تفصیل پہلے واضح۔" : "No surprise scope."}</strong><span>{isUrdu ? "ضرورت اور موقع کی حالت دیکھنے کے بعد حتمی کام اور کوٹیشن کی تصدیق کی جاتی ہے۔" : "Final work and quotation are confirmed after the requirement and site conditions have been reviewed."}</span></div></div></section>
    <HomeProjects locale={locale} />
    <section className="reviewsSection"><div className="container"><div className="reviewsHeader landingSectionHeading"><div><span className="eyebrow">Reviews &amp; ratings</span><h2>Customer Trust</h2><p>{isUrdu ? "ان صارفین کی آراء جنہوں نے ہماری سولر، الیکٹریکل اور اے سی خدمات استعمال کیں۔" : "Feedback from customers who used our Solar, Electrical and AC services."}</p></div><div className="ratingSummary" aria-label="Overall customer rating 4.9 out of 5"><div className="ratingStars" aria-hidden="true">★★★★★</div><strong>{isUrdu ? "5 میں سے 4.9" : "4.9 out of 5"}</strong><span>{isUrdu ? "6 صارفین کے تجزیوں پر مبنی" : "Based on 6 customer reviews"}</span></div></div><CustomerReviewCarousel locale={locale} /></div></section>
    <section className="homeFaqSection"><div className="container faqLayout"><div className="landingSectionHeading"><span className="eyebrow">Before you book</span><h2>Useful Answers</h2><p className="lead">{isUrdu ? "سروس کی درخواست سے پہلے جانیں کہ کیا توقع رکھنی چاہیے اور درست اگلا مرحلہ تجویز کرنے کے لیے کون سی معلومات مددگار ہیں۔" : "Know what to expect before requesting service and what information helps us recommend the correct next step."}</p></div><div className="homeFaqList">{faqs.map(([question, answer]) => <details className="faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final"><div className="container"><span className="eyebrow" style={{ color: "#F5B82E" }}>WhatsApp-first support</span><h2>Tell us what you need and where you are in Lahore.</h2><p>Share your service requirement, area and any helpful photos. We will confirm the next step.</p></div></section>
  </PageShell>;
}
