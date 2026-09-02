export const site = {
  name: "Lahore Services",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923000000000",
  phone: "",
  serviceAreas: [] as string[],
};

export type ServiceKey = "solar" | "electrical" | "ac";

export const services: Record<ServiceKey, { title: string; label: string; description: string; href: string; items: string[] }> = {
  solar: { title: "Solar services in Lahore", label: "Solar", href: "/solar-services-lahore", description: "Installation, setup, diagnostics, inverter and battery work, cleaning and maintenance.", items: ["Solar panel installation", "Connection and setup", "Repair and diagnostics", "Inverter and battery services", "Cleaning and maintenance"] },
  electrical: { title: "Electrical services in Lahore", label: "Electrical", href: "/electrician-services-lahore", description: "Wiring, fault finding, breaker work, fixtures, connections and safety checks.", items: ["New wiring", "Rewiring and upgrades", "Fault finding and repair", "DB and breaker work", "Fixtures and connections"] },
  ac: { title: "AC services in Lahore", label: "AC", href: "/ac-services-lahore", description: "Installation, repair, maintenance, shifting and gas or leakage diagnosis.", items: ["AC installation", "AC repair", "Service and maintenance", "Gas and leakage diagnosis", "Removal and shifting"] },
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappMessage(service?: string) {
  if (!service) return "Assalam-o-Alaikum, I need information about your services in Lahore. My area is [AREA].";
  const name = service.toLowerCase();
  if (name.includes("solar panel installation")) return "Assalam-o-Alaikum, I need information about Solar Panel Installation in Lahore. My area is [AREA].";
  if (name.includes("solar") && (name.includes("repair") || name.includes("diagnostic"))) return "Assalam-o-Alaikum, I need help with Solar System Repair in Lahore. My area is [AREA].";
  if (name.includes("electrical")) return `Assalam-o-Alaikum, I need help with ${service} in Lahore. My area is [AREA].`;
  if (name.includes("ac")) return `Assalam-o-Alaikum, I need ${service} in Lahore. My area is [AREA].`;
  return `Assalam-o-Alaikum, I need information about ${service} in Lahore. My area is [AREA].`;
}
