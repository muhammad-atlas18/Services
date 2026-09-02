import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileWhatsApp } from "@/components/mobile-whatsapp";

export function PageShell({ children, mobileService, mobileMessage }: { children: React.ReactNode; mobileService?: string; mobileMessage?: string }) { return <><SiteHeader /><main id="main">{children}</main><SiteFooter /><MobileWhatsApp service={mobileService} message={mobileMessage} /></>; }
