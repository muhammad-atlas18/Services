import { site } from "@/lib/site";

export function LocalBusinessSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const schema = { "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", name: site.name, logo: `${baseUrl}/gharmahir-logo.png`, image: `${baseUrl}/gharmahir-logo.png`, areaServed: { "@type": "City", name: "Lahore" }, url: baseUrl, description: "Solar, electrical and AC services for confirmed Lahore areas." };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
