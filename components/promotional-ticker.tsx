"use client";

import { announcements, type Announcement } from "@/config/announcements";
import { usePathname } from "next/navigation";

function TickerIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-1.8 7.2L5 12l6.2 2.8L13 22l1.8-7.2L21 12l-6.2-2.8L13 2Z"/></svg>;
}

function AnnouncementText({ item }: { item: Announcement }) {
  if (!item.highlight) return <>{item.text}</>;
  const [before, after] = item.text.split(item.highlight);
  return <>{before}<strong>{item.highlight}</strong>{after}</>;
}

function AnnouncementItem({ item }: { item: Announcement }) {
  const content = <><TickerIcon /><span><AnnouncementText item={item} /></span></>;
  return <div className="tickerLink">{content}</div>;
}

export function PromotionalTicker() {
  const pathname = usePathname(); const urdu = pathname === "/ur" || pathname.startsWith("/ur/");
  const urduText: Record<string, string> = { "solar-discount":"سولر پینل کی تنصیب پر 10% رعایت — محدود مدت کی پیشکش", "electrical-lahore":"لاہور بھر میں پیشہ ورانہ الیکٹریکل سروسز دستیاب ہیں", "ac-whatsapp":"اے سی تنصیب، مرمت اور دیکھ بھال — واٹس ایپ پر بک کریں", "appliance-repair":"قابلِ اعتماد گھریلو آلات کی مرمت آپ کی دہلیز پر" };
  const active = announcements.filter((item) => item.enabled).map((item) => urdu ? { ...item, text:urduText[item.id], highlight:item.id === "solar-discount" ? "10% رعایت" : undefined } : item);
  if (!active.length) return null;
  const group = (duplicate = false) => <div className="tickerGroup" aria-hidden={duplicate || undefined} inert={duplicate || undefined}>{active.map((item) => <div className="tickerEntry" key={`${duplicate ? "copy-" : ""}${item.id}`}><AnnouncementItem item={item} /><span className="tickerSeparator" aria-hidden="true" /></div>)}</div>;
  return <aside className="promotionalTicker" aria-label="Current service promotions"><div className="tickerTrack">{group()}{group(true)}</div></aside>;
}
