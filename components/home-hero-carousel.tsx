"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signalInternalRouteNavigation } from "@/components/scroll-navigation-manager";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { key: "solar", image: "/images/hero/solar-services-hero.png", alt: "Solar technicians installing panels on a Lahore rooftop", label: "Solar Energy Solutions", title: "Professional Solar Services in Lahore", description: "Get dependable support for solar panel installation, system connections, inverter and battery setup, repairs and regular maintenance for your home or business.", href: "/services/solar", cta: "Explore Solar Services", message: "Assalam-o-Alaikum, I need information about Solar Services in Lahore. My area is [AREA]." },
  { key: "electrical", image: "/images/hero/electrical-services-hero.png", alt: "Professional electrician testing a distribution board in a Lahore home", label: "Electrical Installation & Repair", title: "Reliable Electrical Services for Your Property", description: "From new electrical wiring and old wiring repairs to fault diagnosis, distribution boards, switches, sockets, lighting and fan installation.", href: "/services/electrical", cta: "Explore Electrical Services", message: "Assalam-o-Alaikum, I need help with an Electrical Service in Lahore. My area is [AREA]." },
  { key: "ac", image: "/images/hero/ac-services-hero.png", alt: "AC technicians servicing a split air conditioner in a Lahore home", label: "AC Installation & Maintenance", title: "Professional AC Services in Lahore", description: "Stay comfortable with professional AC installation, repair, maintenance, shifting, leakage diagnosis and cooling-performance services.", href: "/services/ac", cta: "Explore AC Services", message: "Assalam-o-Alaikum, I need information about an AC Service in Lahore. My area is [AREA]." },
];
const urduSlides = [
  { key:"solar", image:"/images/hero/solar-services-hero.png", alt:"لاہور میں چھت پر سولر پینل نصب کرتے ٹیکنیشن", label:"سولر توانائی کے حل", title:"لاہور میں پیشہ ورانہ سولر سروسز", description:"گھر یا کاروبار کے لیے سولر پینل کی تنصیب، سسٹم کنکشن، اِنورٹر و بیٹری سیٹ اَپ، مرمت اور باقاعدہ دیکھ بھال کی قابلِ اعتماد معاونت حاصل کریں۔", href:"/ur/services/solar", cta:"سولر سروسز دیکھیں", message:"" },
  { key:"electrical", image:"/images/hero/electrical-services-hero.png", alt:"لاہور کے گھر میں ڈسٹری بیوشن بورڈ چیک کرتا الیکٹریشن", label:"الیکٹریکل تنصیب اور مرمت", title:"آپ کی پراپرٹی کے لیے قابلِ اعتماد الیکٹریکل سروسز", description:"نئی وائرنگ، پرانی وائرنگ کی مرمت، خرابی کی تشخیص، ڈسٹری بیوشن بورڈ، سوئچ، ساکٹ، لائٹس اور پنکھوں کی تنصیب تک مکمل معاونت۔", href:"/ur/services/electrical", cta:"الیکٹریکل سروسز دیکھیں", message:"" },
  { key:"ac", image:"/images/hero/ac-services-hero.png", alt:"لاہور کے گھر میں اسپلٹ اے سی کی سروس کرتے ٹیکنیشن", label:"اے سی تنصیب اور دیکھ بھال", title:"لاہور میں پیشہ ورانہ اے سی سروسز", description:"اے سی کی تنصیب، مرمت، دیکھ بھال، منتقلی، لیکیج کی تشخیص اور کولنگ کی کارکردگی کے لیے پیشہ ورانہ سروس۔", href:"/ur/services/ac", cta:"اے سی سروسز دیکھیں", message:"" }
];

type SearchItem = { title: string; description: string; href: string; category: string };

export function HomeHeroCarousel({ searchItems, locale = "en" }: { searchItems: SearchItem[]; locale?: "en" | "ur" }) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const startX = useRef<number | null>(null);
  const activeSlides = locale === "ur" ? urduSlides : slides;
  const change = useCallback((step: number) => setActive((current) => (current + step + activeSlides.length) % activeSlides.length), [activeSlides.length]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => change(1), 5000);
    return () => window.clearInterval(timer);
  }, [change, paused]);

  const normalizedQuery = query.trim().toLowerCase();
  const suggestions = normalizedQuery.length >= 2
    ? searchItems.filter((item) => `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalizedQuery) || normalizedQuery.split(/\s+/).every((word) => `${item.title} ${item.category}`.toLowerCase().includes(word))).slice(0, 7)
    : [];
  const chooseSuggestion = (item: SearchItem) => { setSearchOpen(false); setQuery(item.title); signalInternalRouteNavigation(); router.push(item.href); };

  return <section className="homeHeroCarousel" aria-roledescription="carousel" aria-label="Lahore service highlights" onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={(event) => { startX.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (startX.current === null) return; const distance = event.changedTouches[0].clientX - startX.current; if (Math.abs(distance) > 45) change(distance < 0 ? 1 : -1); startX.current = null; }}>
    <div className="heroSlides">
      {activeSlides.map((slide, index) => <article className={`heroSlide heroSlide-${slide.key}${index === active ? " isActive" : ""}`} key={slide.key} aria-roledescription="slide" aria-label={`${index + 1} of ${activeSlides.length}: ${slide.label}`} aria-hidden={index !== active}>
        <Image className="heroSlideImage" src={slide.image} alt={slide.alt} fill priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes="100vw" />
        <div className="heroSlideOverlay" aria-hidden="true" />
        <div className="container heroCarouselContent"><div className="heroCarouselCopy">
          <span className="heroCarouselLabel">{slide.label}</span><h1>{slide.title}</h1><p>{slide.description}</p>
          <div className="heroCarouselActions"><Link className="button heroExplore" href={slide.href}>{slide.cta}<span aria-hidden="true">→</span></Link></div>
        </div></div>
      </article>)}
    </div>
    <div className="heroSearchLayer"><div className="heroSearchWrap">
      <form className="heroSearch" role="search" onSubmit={(event) => { event.preventDefault(); if (suggestions[highlighted]) chooseSuggestion(suggestions[highlighted]); }}>
        <span className="heroSearchIcon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.2 16.2 4.3 4.3"/></svg></span>
        <label className="srOnly" htmlFor="hero-service-search">Search services</label>
        <input id="hero-service-search" type="search" autoComplete="off" placeholder="What service do you need?" value={query} aria-label="Search Solar, Electrical, AC and Home Appliance services" aria-expanded={searchOpen && normalizedQuery.length >= 2} aria-controls="hero-search-suggestions" aria-autocomplete="list" onFocus={() => setSearchOpen(true)} onChange={(event) => { setQuery(event.target.value); setHighlighted(0); setSearchOpen(true); }} onKeyDown={(event) => { if (!suggestions.length) return; if (event.key === "ArrowDown") { event.preventDefault(); setHighlighted((value) => (value + 1) % suggestions.length); } else if (event.key === "ArrowUp") { event.preventDefault(); setHighlighted((value) => (value - 1 + suggestions.length) % suggestions.length); } else if (event.key === "Escape") setSearchOpen(false); }} />
        {query && <button className="heroSearchClear" type="button" aria-label="Clear search" onClick={() => { setQuery(""); setSearchOpen(false); }}>×</button>}
        <button className="heroSearchSubmit" type="submit" disabled={!suggestions.length}>Search</button>
      </form>
      {searchOpen && normalizedQuery.length >= 2 && <div className="heroSearchSuggestions" id="hero-search-suggestions" role="listbox">
        {suggestions.length ? suggestions.map((item, index) => <button type="button" role="option" aria-selected={highlighted === index} className={highlighted === index ? "isHighlighted" : ""} key={item.href} onMouseDown={(event) => event.preventDefault()} onMouseEnter={() => setHighlighted(index)} onClick={() => chooseSuggestion(item)}><span className="suggestionGlyph" aria-hidden="true">{item.title.charAt(0)}</span><span><strong>{item.title}</strong><small>{item.category}</small><em>{item.description}</em></span><b aria-hidden="true">→</b></button>) : <div className="heroSearchEmpty"><strong>No matching service found</strong><span>Try “solar”, “wiring”, “AC repair” or “washing machine”.</span></div>}
      </div>}
    </div></div>
    <div className="heroDots" aria-label="Choose a service slide">{activeSlides.map((slide, index) => <button key={slide.key} type="button" className={index === active ? "isActive" : ""} aria-label={`Go to ${slide.label} slide`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}</div>
    <p className="srOnly" aria-live="polite">Showing {activeSlides[active].label}</p>
  </section>;
}
