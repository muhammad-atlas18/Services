import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/service-details";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticPaths = ["", "/services/solar", "/services/electrical", "/services/ac", "/services/home-appliances", "/solar-services-lahore", "/electrician-services-lahore", "/ac-services-lahore", "/projects", "/about", "/contact", "/privacy-policy", "/terms-and-conditions"];
  const detailPaths = Object.keys(serviceDetails).map((path) => `/services/${path}`);
  return [...staticPaths, ...detailPaths].flatMap((path) => {
    const english = `${baseUrl}${path}`; const urdu = `${baseUrl}/ur${path}`;
    const shared = { lastModified:new Date(), changeFrequency:(path === "" ? "weekly" : "monthly") as "weekly" | "monthly", priority:path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7, alternates:{ languages:{ en:english, ur:urdu, "x-default":english } } };
    return [{ url:english, ...shared }, { url:urdu, ...shared }];
  });
}
