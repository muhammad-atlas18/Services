export const site = {
  name: "GharMahir",
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923086009350").replace(/\D/g, ""),
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/",
  phone: "",
  serviceAreas: [] as string[],
};

export type ServiceKey = "solar" | "electrical" | "ac";

export const services: Record<ServiceKey, { title: string; label: string; description: string; href: string; items: string[] }> = {
  solar: { title: "Solar services in Lahore", label: "Solar", href: "/solar-services-lahore", description: "Installation, setup, diagnostics, inverter and battery work, cleaning and maintenance.", items: ["Solar panel installation", "Connection and setup", "Repair and diagnostics", "Inverter and battery services", "Cleaning and maintenance"] },
  electrical: { title: "Electrical services in Lahore", label: "Electrical", href: "/electrician-services-lahore", description: "Wiring, fault finding, breaker work, fixtures, connections and safety checks.", items: ["New wiring", "Rewiring and upgrades", "Fault finding and repair", "DB and breaker work", "Fixtures and connections"] },
  ac: { title: "AC services in Lahore", label: "AC", href: "/ac-services-lahore", description: "Installation, repair, maintenance, shifting and gas or leakage diagnosis.", items: ["AC installation", "AC repair", "Service and maintenance", "Gas and leakage diagnosis", "Removal and shifting"] },
};
