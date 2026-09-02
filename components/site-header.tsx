"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 18); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <header className={`header ${scrolled ? "headerScrolled" : ""}`}><a className="skip" href="#main">Skip to content</a><div className="container nav"><Link className="brand" href="/"><span className="brandMark">LS</span>Lahore Services</Link><nav className="navLinks" aria-label="Primary navigation"><Link href="/services/solar">Solar</Link><Link href="/services/electrical">Electrical</Link><Link href="/services/ac">AC</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><MobileNavigation /><WhatsAppLink className="headerWhatsapp" position="header">Contact on WhatsApp</WhatsAppLink></div></header>;
}
