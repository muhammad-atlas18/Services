import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/service-details";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticPaths = ["", "/services/solar", "/services/electrical", "/services/ac", "/solar-services-lahore", "/electrician-services-lahore", "/ac-services-lahore", "/projects", "/about", "/contact", "/privacy-policy", "/terms"];
  const detailPaths = Object.keys(serviceDetails).map((path) => `/services/${path}`);
  return [...staticPaths, ...detailPaths].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7 }));
}
