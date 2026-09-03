import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./assets.css";
import "./carousel.css";
import "./detail-redesign.css";
import "./detail-responsive-fixes.css";
import "./service-catalog.css";
import "./main-category-cards.css";
import "./category-page.css";
import { LocalBusinessSchema } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: { default: "Lahore Services | Solar, Electrical & AC", template: "%s | Lahore Services" },
  description: "Solar, electrical and AC services for confirmed Lahore areas. Contact us on WhatsApp for a site-specific quotation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body><LocalBusinessSchema />{children}</body></html>;
}
