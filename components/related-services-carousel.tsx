"use client";

import { useRef } from "react";

export function RelatedServicesCarousel({ children, itemCount }: { children: React.ReactNode; itemCount: number }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const element = track.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth * .92, behavior: "smooth" });
  };

  return <div className="relatedCarousel">
    {itemCount > 3 && <div className="relatedCarouselControls" aria-label="Related services carousel controls">
      <button type="button" onClick={() => move(-1)} aria-label="Show previous related services"><span aria-hidden="true">←</span></button>
      <button type="button" onClick={() => move(1)} aria-label="Show next related services"><span aria-hidden="true">→</span></button>
    </div>}
    <div className="relatedServiceGrid" ref={track}>{children}</div>
  </div>;
}
