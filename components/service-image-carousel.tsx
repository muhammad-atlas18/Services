"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function ServiceImageCarousel({ images, title }: { images: GalleryImage[]; title: string }) {
  const displayImages = images.length > 1 ? images.slice(1) : images;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || displayImages.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % displayImages.length), 4500);
    return () => window.clearInterval(timer);
  }, [displayImages.length, paused]);

  const show = (index: number) => setActive((index + displayImages.length) % displayImages.length);

  return <div className="serviceGallery" role="region" aria-label={`${title} image gallery`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="serviceGalleryTrack" style={{ transform: `translateX(-${active * 100}%)` }}>
      {displayImages.map((image, index) => <div className="serviceGallerySlide" key={`${image.src}-${index}`} aria-hidden={active !== index}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 850px) 100vw, 48vw" /></div>)}
    </div>
    <button className="serviceGalleryArrow serviceGalleryPrev" type="button" onClick={() => show(active - 1)} aria-label="Previous image">←</button>
    <button className="serviceGalleryArrow serviceGalleryNext" type="button" onClick={() => show(active + 1)} aria-label="Next image">→</button>
    <div className="serviceGalleryDots" aria-label="Choose gallery image">{displayImages.map((_, index) => <button className={index === active ? "active" : ""} type="button" key={index} onClick={() => show(index)} aria-label={`Show image ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}</div>
  </div>;
}
