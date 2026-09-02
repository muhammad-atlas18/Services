import { serviceDetails } from "@/lib/service-details";
import { servicePageContent } from "@/lib/service-page-content";

export const categoryOrder = ["solar", "electrical", "ac"] as const;
export type ServiceCategory = (typeof categoryOrder)[number];

const categoryMeta = {
  solar: { label: "Solar Services", intro: "Planning, installation, connection, diagnostics, cleaning and ongoing solar support for Lahore properties." },
  electrical: { label: "Electrical Services", intro: "New wiring, rewiring, fault diagnosis, distribution-board and electrical fixture services." },
  ac: { label: "AC Services", intro: "Installation, fault diagnosis, maintenance, shifting and cooling or leakage support." },
} as const;

const presentation = [
  ["solar/system-design", 1, "design"],
  ["solar/panel-installation", 2, "solar"],
  ["solar/connection-and-setup", 3, "connection"],
  ["solar/inverter-and-battery", 4, "battery"],
  ["solar/troubleshooting", 5, "diagnostic"],
  ["solar/repair-and-diagnostics", 6, "repair"],
  ["solar/panel-cleaning", 7, "cleaning"],
  ["solar/maintenance", 8, "maintenance"],
  ["electrical/new-wiring", 1, "wiring"],
  ["electrical/rewiring-and-upgrades", 2, "rewiring"],
  ["electrical/fault-finding", 3, "diagnostic"],
  ["electrical/db-and-breakers", 4, "breaker"],
  ["electrical/fixtures-and-repairs", 5, "fixture"],
  ["ac/installation", 1, "installation"],
  ["ac/repair", 2, "repair"],
  ["ac/maintenance-and-service", 3, "maintenance"],
  ["ac/shifting", 4, "shifting"],
  ["ac/leakage-and-cooling", 5, "cooling"],
] as const;

const cardTitles: Partial<Record<(typeof presentation)[number][0], string>> = {
  "solar/connection-and-setup": "Solar System Connection & Setup",
  "solar/inverter-and-battery": "Solar Inverter & Battery Services",
  "solar/repair-and-diagnostics": "Solar System Repair & Fault Diagnosis",
  "electrical/rewiring-and-upgrades": "Old Wiring Repair & Rewiring",
  "electrical/fault-finding": "Electrical Fault Diagnosis & Repair",
  "electrical/db-and-breakers": "Distribution Board & Circuit Breaker Services",
  "electrical/fixtures-and-repairs": "Switches, Sockets, Lights & Fan Services",
  "ac/repair": "AC Repair & Fault Diagnosis",
  "ac/maintenance-and-service": "AC Maintenance & Servicing",
  "ac/shifting": "AC Shifting & Reinstallation",
  "ac/leakage-and-cooling": "AC Leakage & Cooling Diagnosis",
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
