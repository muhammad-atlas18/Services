"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Suspense } from "react";

const links = [
  ["Home", "/"],
  ["Solar", "/services/solar"], ["Electrical", "/services/electrical"], ["AC", "/services/ac"], ["Home Appliances", "/services/home-appliances"],
  ["Projects", "/projects"], ["About", "/about"], ["Contact Us", "/contact"],
] as const;

export function MobileNavigation() {
  const pathname = usePathname();
  const activePath = pathname.replace(/^\/ur(?=\/|$)/, "") || "/";
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const isActive = (href: string) => href === "/" ? activePath === "/" : activePath === href || activePath.startsWith(`${href}/`) || (href === "/services/solar" && activePath === "/solar-services-lahore") || (href === "/services/electrical" && activePath === "/electrician-services-lahore") || (href === "/services/ac" && activePath === "/ac-services-lahore");
  return <div className="mobileNav"><button className="menuButton" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? "Close menu" : "Menu"}</button>{open && <nav id="mobile-menu" className="mobileMenu" aria-label="Mobile navigation">{links.map(([label, href]) => <Link className={isActive(href) ? "navActive" : ""} aria-current={isActive(href) ? "page" : undefined} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}<Suspense fallback={null}><LanguageSwitcher mobile /></Suspense></nav>}</div>;
}
