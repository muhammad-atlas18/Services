import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";
import "./assets.css";
import "./carousel.css";
import "./detail-redesign.css";
import "./detail-responsive-fixes.css";
import "./related-service-card-polish.css";
import "./service-catalog.css";
import "./service-card-fixes.css";
import "./projects-gallery.css";
import "./footer.css";
import "./legal.css";
import "./review-carousel.css";
import "./main-category-cards.css";
import "./main-category-card-polish.css";
import "./category-page.css";
import "./promotional-ticker.css";
import "./promotional-ticker-sticky.css";
import "./search-color-fix.css";
import "./navigation-active.css";
import "./projects-hero-image.css";
import "./about-page.css";
import "./hero-height-normalize.css";
import "./contact-page.css";
import "./contact-hero.css";
import "./hero-content-polish.css";
import "./scroll-navigation.css";
import "./mobile-responsive.css";
import "./brand.css";
import "./i18n.css";
import "./home-projects.css";
import { LocalBusinessSchema } from "@/components/structured-data";
import { ScrollNavigationManager } from "@/components/scroll-navigation-manager";
import { LocaleRuntime } from "@/components/locale-runtime";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const notoArabic = localFont({ src:[{ path:"../public/fonts/noto-sans-arabic-400.ttf", weight:"400" },{ path:"../public/fonts/noto-sans-arabic-700.ttf", weight:"700" }], variable:"--font-urdu", display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "GharMahir | Solar, Electrical, AC & Appliance Services", template: "%s | GharMahir" },
  description: "Solar, electrical and AC services for confirmed Lahore areas. Contact us on WhatsApp for a site-specific quotation.",
  icons: { icon: "/gharmahir-logo.png", shortcut: "/gharmahir-logo.png", apple: "/gharmahir-logo.png" },
  alternates: { canonical: "/", languages: { en: "/", ur: "/ur", "x-default": "/" } },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-gharmahir-locale") === "ur" ? "ur" : "en";
  return <html lang={locale} dir={locale === "ur" ? "rtl" : "ltr"} data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} ${notoArabic.variable}`}><body><LocalBusinessSchema /><ScrollNavigationManager /><LocaleRuntime />{children}</body></html>;
}
