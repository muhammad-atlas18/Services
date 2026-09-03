"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const routeNavigationEvent = "lahore-services:route-navigation";

export function signalInternalRouteNavigation() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(routeNavigationEvent));
}

function moveToDestination() {
  const rawHash = window.location.hash.slice(1);
  if (rawHash) {
    const target = document.getElementById(decodeURIComponent(rawHash));
    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.getElementById("main")?.focus({ preventScroll: true });
}

export function ScrollNavigationManager() {
  const pathname = usePathname();
  const initialRender = useRef(true);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const handleSamePageLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname) return;
      if (!destination.hash) window.requestAnimationFrame(moveToDestination);
    };

    const handleProgrammaticNavigation = () => {
      window.requestAnimationFrame(() => window.requestAnimationFrame(moveToDestination));
    };

    document.addEventListener("click", handleSamePageLink, true);
    window.addEventListener(routeNavigationEvent, handleProgrammaticNavigation);
    return () => {
      window.history.scrollRestoration = previousRestoration;
      document.removeEventListener("click", handleSamePageLink, true);
      window.removeEventListener(routeNavigationEvent, handleProgrammaticNavigation);
    };
  }, []);

  useLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(moveToDestination);
    });
    return () => window.cancelAnimationFrame(firstFrame);
  }, [pathname]);

  return null;
}
