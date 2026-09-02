"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Solar", "/solar-services-lahore"], ["Electrical", "/electrician-services-lahore"], ["AC", "/ac-services-lahore"],
  ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <div className="mobileNav"><button className="menuButton" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? "Close menu" : "Menu"}</button>{open && <nav id="mobile-menu" className="mobileMenu" aria-label="Mobile navigation">{links.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</div>;
}
