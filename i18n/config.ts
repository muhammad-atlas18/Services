import en from "@/locales/en.json";
import ur from "@/locales/ur.json";

export const locales = ["en", "ur"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const dictionaries = { en, ur } as const;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ur" || pathname.startsWith("/ur/") ? "ur" : "en";
}

export function localizePath(pathname: string, locale: Locale) {
  const clean = pathname === "/ur" ? "/" : pathname.replace(/^\/ur(?=\/)/, "");
  return locale === "ur" ? `/ur${clean === "/" ? "" : clean}` : clean;
}
