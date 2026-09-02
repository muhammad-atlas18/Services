import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";
import { whatsappMessage, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  return <header className="header"><a className="skip" href="#main">Skip to content</a><div className="container nav"><Link className="brand" href="/"><span className="brandMark">LS</span>Lahore Services</Link><nav className="navLinks" aria-label="Primary navigation"><Link href="/solar-services-lahore">Solar</Link><Link href="/electrician-services-lahore">Electrical</Link><Link href="/ac-services-lahore">AC</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><MobileNavigation /><a className="button primary headerWhatsapp" href={whatsappUrl(whatsappMessage())} target="_blank" rel="noreferrer">WhatsApp us</a></div></header>;
}
