import { serviceDetails } from "@/lib/service-details";
import { servicePageContent } from "@/lib/service-page-content";

export const categoryOrder = ["solar", "electrical", "ac", "home-appliances"] as const;
export type ServiceCategory = (typeof categoryOrder)[number];

const categoryMeta = {
  solar: { label: "Solar Services", route: "/services/solar", image: "/images/solar-panel-installation-lahore.webp", imageAlt: "Solar technicians installing rooftop panels in Lahore", intro: "Planning, installation, connection, diagnostics, cleaning and ongoing solar support for Lahore properties.", cardDescription: "Complete solar solutions including system planning, panel installation, connections, troubleshooting, repairs, cleaning and maintenance." },
  electrical: { label: "Electrical Services", route: "/services/electrical", image: "/images/electrical-wiring-lahore.webp", imageAlt: "Electrician completing organised wiring in a Lahore property", intro: "New wiring, rewiring, fault diagnosis, distribution-board and electrical fixture services.", cardDescription: "Professional electrical services for new wiring, rewiring, fault repairs, distribution boards, switches, sockets, lights and fans." },
  ac: { label: "AC Services", route: "/services/ac", image: "/images/ac-installation-lahore.webp", imageAlt: "Technician installing a split AC in a Lahore home", intro: "Installation, fault diagnosis, maintenance, shifting and cooling or leakage support.", cardDescription: "Reliable AC installation, repair, maintenance, shifting, leakage diagnosis and cooling-performance services." },
  "home-appliances": { label: "Home Appliance Services", route: "/services/home-appliances", image: "/images/home-appliances/category-hero.webp", imageAlt: "Home appliance technician servicing household appliances in Lahore", intro: "Diagnosis and repair for essential kitchen and laundry appliances across Lahore.", cardDescription: "Professional diagnosis and repair support for refrigerators, washing machines, microwave ovens, water dispensers and other essential household appliances." },
} as const;

const presentation = [
  ["solar/system-design", 1, "design"],
  ["solar/panel-installation", 2, "solar"],
  ["solar/system-setup", 3, "connection"],
  ["solar/inverter-battery", 4, "battery"],
  ["solar/troubleshooting", 5, "diagnostic"],
  ["solar/repair", 6, "repair"],
  ["solar/panel-cleaning", 7, "cleaning"],
  ["solar/maintenance", 8, "maintenance"],
  ["electrical/new-wiring", 1, "wiring"],
  ["electrical/rewiring", 2, "rewiring"],
  ["electrical/fault-repair", 3, "diagnostic"],
  ["electrical/distribution-board", 4, "breaker"],
  ["electrical/fixtures", 5, "fixture"],
  ["ac/installation", 1, "installation"],
  ["ac/repair", 2, "repair"],
  ["ac/maintenance", 3, "maintenance"],
  ["ac/shifting", 4, "shifting"],
  ["ac/leakage-diagnosis", 5, "cooling"],
  ["home-appliances/refrigerator-repair", 1, "refrigerator"],
  ["home-appliances/washing-machine-repair", 2, "washing"],
  ["home-appliances/microwave-repair", 3, "microwave"],
  ["home-appliances/water-dispenser-repair", 4, "dispenser"],
  ["home-appliances/oven-cooking-range-repair", 5, "oven"],
  ["home-appliances/dishwasher-repair", 6, "dishwasher"],
] as const;

const cardTitles: Partial<Record<(typeof presentation)[number][0], string>> = {
  "solar/system-setup": "Solar System Connection & Setup",
  "solar/inverter-battery": "Solar Inverter & Battery Services",
  "solar/repair": "Solar System Repair & Fault Diagnosis",
  "electrical/rewiring": "Old Wiring Repair & Rewiring",
  "electrical/fault-repair": "Electrical Fault Diagnosis & Repair",
  "electrical/distribution-board": "Distribution Board & Circuit Breaker Services",
  "electrical/fixtures": "Switches, Sockets, Lights & Fan Services",
  "ac/repair": "AC Repair & Fault Diagnosis",
  "ac/maintenance": "AC Maintenance & Servicing",
  "ac/shifting": "AC Shifting & Reinstallation",
  "ac/leakage-diagnosis": "AC Leakage & Cooling Diagnosis",
};

export const serviceCatalog = presentation.map(([path, order, icon]) => {
  const detail = serviceDetails[path];
  const content = servicePageContent[path];
  return { path, route: `/services/${path}`, category: detail.category, order, icon, image: detail.image, imageAlt: detail.imageAlt, title: cardTitles[path] || detail.title, summary: detail.summary, whatsappMessage: content.whatsappMessage };
});

export function servicesForCategory(category: ServiceCategory) {
  return serviceCatalog.filter((service) => service.category === category).sort((a, b) => a.order - b.order);
}

export function getCategoryMeta(category: ServiceCategory) { return categoryMeta[category]; }
