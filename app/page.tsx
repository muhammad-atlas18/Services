import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { MainServiceCategoryCard } from "@/components/main-service-category-card";
import { categoryOrder } from "@/lib/service-catalog";

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

const customerReviews = [
  { name: "Hamza Ahmed", initials: "HA", rating: "5.0", service: "Solar Installation", review: "Excellent installation service. The team was professional, explained everything clearly, and completed the work on time." },
  { name: "Usman Raza", initials: "UR", rating: "4.8", service: "Solar Repair", review: "Very good service. They quickly identified the solar system issue and fixed it properly. Highly recommended." },
  { name: "Bilal Khan", initials: "BK", rating: "5.0", service: "Electrical Work", review: "Great electrical work. The technician was skilled, punctual, and completed everything neatly. Very satisfied with the service." },
  { name: "Ahsan Malik", initials: "AM", rating: "4.7", service: "AC Repair", review: "Really good service. The technician arrived on time, diagnosed the problem quickly, and repaired the AC perfectly." },
  { name: "Fahad Iqbal", initials: "FI", rating: "5.0", service: "Solar Installation", review: "Excellent experience from start to finish. The installation was done professionally and the team was very cooperative." },
  { name: "Hassan Shah", initials: "HS", rating: "4.9", service: "Solar Repair", review: "Very professional and reliable service. My solar system was repaired quickly and is working perfectly now. Definitely recommended." },
];

export default function HomePage() {
  return <PageShell>
    <HomeHeroCarousel />
    <section id="services" className="mainCategoriesSection"><div className="container"><div className="catalogueIntro"><span className="eyebrow">What we do</span><h2>Our Services</h2><p>Choose a main service category to explore complete Solar, Electrical or AC support across Lahore.</p></div><div className="mainCategoryGrid">{categoryOrder.map((category) => <MainServiceCategoryCard category={category} key={category} />)}</div></div></section>
    <section className="soft processSection"><div className="container"><div className="processIntro landingSectionHeading"><div><span className="eyebrow">Our process</span><h2>How It Works</h2></div><p>Clear service from first detail to final handover. Our process keeps the scope, quotation and next step clear before work begins.</p></div><div className="processGrid">{processSteps.map((step) => <article className="processCard" key={step.number}><span className="processNumber">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="processNote"><strong>No surprise scope.</strong><span>Final work and quotation are confirmed after the requirement and site conditions have been reviewed.</span></div></div></section>
    <section className="reviewsSection"><div className="container"><div className="reviewsHeader landingSectionHeading"><div><span className="eyebrow">Reviews &amp; ratings</span><h2>Customer Trust</h2><p>Feedback from customers who used our Solar, Electrical and AC services.</p></div><div className="ratingSummary" aria-label="Overall customer rating 4.9 out of 5"><div className="ratingStars" aria-hidden="true">★★★★★</div><strong>4.9 out of 5</strong><span>Based on 6 customer reviews</span></div></div><div className="customerReviewGrid">{customerReviews.map((item) => <article className="customerReviewCard" key={item.name}><div className="reviewCardTop"><span className="reviewAvatar" aria-hidden="true">{item.initials}</span><div><h3>{item.name}</h3><span>{item.service}</span></div><strong>{item.rating}</strong></div><div className="reviewStars" aria-label={`${item.rating} out of 5 stars`}>★★★★★</div><blockquote>“{item.review}”</blockquote><span className="verifiedReview"><b aria-hidden="true">✓</b> Customer review</span></article>)}</div></div></section>
    <section className="homeFaqSection"><div className="container faqLayout"><div className="landingSectionHeading"><span className="eyebrow">Before you book</span><h2>Useful Answers</h2><p className="lead">Know what to expect before requesting service and what information helps us recommend the correct next step.</p></div><div className="homeFaqList">{homeFaqs.map(([question, answer]) => <details className="faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final"><div className="container"><span className="eyebrow" style={{ color: "#F5B82E" }}>WhatsApp-first support</span><h2>Tell us what you need and where you are in Lahore.</h2><p>Share your service requirement, area and any helpful photos. We will confirm the next step.</p><div className="actions" style={{ justifyContent: "center" }}><WhatsAppLink position="final_cta">Contact on WhatsApp</WhatsAppLink><Link className="button secondary" href="/contact">Contact options</Link></div></div></section>
  </PageShell>;
}
