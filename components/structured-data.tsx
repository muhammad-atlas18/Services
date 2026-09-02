import { site } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = { "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", name: site.name, areaServed: { "@type": "City", name: "Lahore" }, url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", description: "Solar, electrical and AC services for confirmed Lahore areas." };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
