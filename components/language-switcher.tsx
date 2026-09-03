"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getLocaleFromPath, localizePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname(); const search = useSearchParams(); const locale = getLocaleFromPath(pathname);
  const [open, setOpen] = useState(false); const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => { const close = (event: MouseEvent) => { if (!wrapper.current?.contains(event.target as Node)) setOpen(false); }; const key = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("mousedown", close); document.addEventListener("keydown", key); return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", key); }; }, []);
  const choose = (next: Locale) => { document.cookie = `gharmahir-locale=${next}; path=/; max-age=31536000; samesite=lax`; localStorage.setItem("gharmahir-locale", next); const query = search.toString(); window.location.assign(`${localizePath(pathname, next)}${query ? `?${query}` : ""}${window.location.hash}`); };
  const label = locale === "ur" ? "ویب سائٹ کی زبان تبدیل کریں" : "Change website language";
  return <div className={`languageSwitcher${mobile ? " languageSwitcherMobile" : ""}`} ref={wrapper} data-no-translate>
    <button type="button" className="languageTrigger" aria-label={label} aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen((value) => !value)}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg><span>{locale === "ur" ? "اردو" : "EN"}</span><b aria-hidden="true">⌄</b></button>
    {open && <div className="languageMenu" role="listbox" aria-label={label}><button type="button" role="option" aria-selected={locale === "en"} className={locale === "en" ? "active" : ""} onClick={() => choose("en")}><span>English</span><small>EN</small></button><button type="button" role="option" aria-selected={locale === "ur"} className={locale === "ur" ? "active" : ""} onClick={() => choose("ur")}><span lang="ur" dir="rtl">اردو</span><small>UR</small></button></div>}
  </div>;
}
