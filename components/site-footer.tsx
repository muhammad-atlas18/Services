import Link from "next/link";
import { whatsappMessage, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return <footer className="footer"><div className="container footerInner"><span>Lahore Services · Final brand details pending</span><span><Link href="/services/solar">Solar</Link> · <Link href="/services/electrical">Electrical</Link> · <Link href="/services/ac">AC</Link> · <Link href="/services/home-appliances">Home Appliances</Link></span><a href={whatsappUrl(whatsappMessage())} target="_blank" rel="noreferrer">WhatsApp us</a><span><Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div></footer>;
}
