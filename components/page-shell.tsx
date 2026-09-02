import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileWhatsApp } from "@/components/mobile-whatsapp";

export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader /><main id="main">{children}</main><SiteFooter /><MobileWhatsApp /></>; }
