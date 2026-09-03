"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Suspense } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const activePath = pathname.replace(/^\/ur(?=\/|$)/, "") || "/";
  const [scrolled, setScrolled] = useState(false);
  const links = [["Home", "/"], ["Solar", "/services/solar"], ["Electrical", "/services/electrical"], ["AC", "/services/ac"], ["Appliances", "/services/home-appliances"], ["Projects", "/projects"], ["About", "/about"], ["Contact Us", "/contact"]] as const;
  const isActive = (href: string) => href === "/" ? activePath === "/" : activePath === href || activePath.startsWith(`${href}/`) || (href === "/services/solar" && activePath === "/solar-services-lahore") || (href === "/services/electrical" && activePath === "/electrician-services-lahore") || (href === "/services/ac" && activePath === "/ac-services-lahore");
  useEffect(() => { const update = () => setScrolled(window.scrollY > 18); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <header className={`header ${scrolled ? "headerScrolled" : ""}`}><a className="skip" href="#main">Skip to content</a><div className="container nav"><Link className="brand" href="/" aria-label="GharMahir home"><BrandLogo priority /></Link><nav className="navLinks" aria-label="Primary navigation">{links.map(([label, href]) => <Link className={isActive(href) ? "navActive" : undefined} aria-current={isActive(href) ? "page" : undefined} href={href} key={href}>{label}</Link>)}<Suspense fallback={null}><LanguageSwitcher /></Suspense></nav><MobileNavigation /></div></header>;
}
