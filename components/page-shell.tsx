import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileWhatsApp } from "@/components/mobile-whatsapp";
import { PromotionalTicker } from "@/components/promotional-ticker";

export function PageShell({ children, mobileService, mobileMessage, mobileSourcePage }: { children: React.ReactNode; mobileService?: string; mobileMessage?: string; mobileSourcePage?: string }) { return <><SiteHeader /><PromotionalTicker /><main id="main" tabIndex={-1}>{children}</main><SiteFooter /><MobileWhatsApp service={mobileService} message={mobileMessage} sourcePage={mobileSourcePage} /></>; }
