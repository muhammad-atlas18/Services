import Link from "next/link";
import { whatsappMessage, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return <footer className="footer"><div className="container footerInner"><span>Lahore Services · Final brand details pending</span><span><Link href="/solar-services-lahore">Solar</Link> · <Link href="/electrician-services-lahore">Electrical</Link> · <Link href="/ac-services-lahore">AC</Link></span><a href={whatsappUrl(whatsappMessage())} target="_blank" rel="noreferrer">WhatsApp us</a><span><Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div></footer>;
}
