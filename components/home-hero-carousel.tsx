"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { key: "solar", image: "/images/hero/solar-services-hero.png", alt: "Solar technicians installing panels on a Lahore rooftop", label: "Solar Energy Solutions", title: "Professional Solar Services in Lahore", description: "Get dependable support for solar panel installation, system connections, inverter and battery setup, repairs and regular maintenance for your home or business.", href: "/services/solar", cta: "Explore Solar Services", message: "Assalam-o-Alaikum, I need information about Solar Services in Lahore. My area is [AREA]." },
  { key: "electrical", image: "/images/hero/electrical-services-hero.png", alt: "Professional electrician testing a distribution board in a Lahore home", label: "Electrical Installation & Repair", title: "Reliable Electrical Services for Your Property", description: "From new electrical wiring and old wiring repairs to fault diagnosis, distribution boards, switches, sockets, lighting and fan installation.", href: "/services/electrical", cta: "Explore Electrical Services", message: "Assalam-o-Alaikum, I need help with an Electrical Service in Lahore. My area is [AREA]." },
  { key: "ac", image: "/images/hero/ac-services-hero.png", alt: "AC technicians servicing a split air conditioner in a Lahore home", label: "AC Installation & Maintenance", title: "Professional AC Services in Lahore", description: "Stay comfortable with professional AC installation, repair, maintenance, shifting, leakage diagnosis and cooling-performance services.", href: "/services/ac", cta: "Explore AC Services", message: "Assalam-o-Alaikum, I need information about an AC Service in Lahore. My area is [AREA]." },
];

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const change = useCallback((step: number) => setActive((current) => (current + step + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => change(1), 5000);
    return () => window.clearInterval(timer);
  }, [change, paused]);

  return <section className="homeHeroCarousel" aria-roledescription="carousel" aria-label="Lahore service highlights" onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={(event) => { startX.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (startX.current === null) return; const distance = event.changedTouches[0].clientX - startX.current; if (Math.abs(distance) > 45) change(distance < 0 ? 1 : -1); startX.current = null; }}>
    <div className="heroSlides">
      {slides.map((slide, index) => <article className={`heroSlide heroSlide-${slide.key}${index === active ? " isActive" : ""}`} key={slide.key} aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`} aria-hidden={index !== active}>
        <Image className="heroSlideImage" src={slide.image} alt={slide.alt} fill priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes="100vw" />
        <div className="heroSlideOverlay" aria-hidden="true" />
        <div className="container heroCarouselContent"><div className="heroCarouselCopy">
          <span className="heroCarouselLabel">{slide.label}</span><h1>{slide.title}</h1><p>{slide.description}</p>
          <div className="heroCarouselActions"><Link className="button heroExplore" href={slide.href}>{slide.cta}<span aria-hidden="true">→</span></Link></div>
        </div></div>
      </article>)}
    </div>
    <div className="heroDots" aria-label="Choose a service slide">{slides.map((slide, index) => <button key={slide.key} type="button" className={index === active ? "isActive" : ""} aria-label={`Go to ${slide.label} slide`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}</div>
    <p className="srOnly" aria-live="polite">Showing {slides[active].label}</p>
  </section>;
}
