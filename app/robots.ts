import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return production ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${baseUrl}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } };
}
