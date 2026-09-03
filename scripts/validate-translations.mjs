import { readFileSync } from "node:fs";

const read = (locale) => JSON.parse(readFileSync(new URL(`../locales/${locale}.json`, import.meta.url), "utf8"));
const en = read("en"); const ur = read("ur"); const errors = [];
const placeholders = (value) => [...String(value).matchAll(/\{([\w]+)\}/g)].map((match) => match[1]).sort().join(",");
for (const key of new Set([...Object.keys(en), ...Object.keys(ur)])) {
  if (!(key in en)) errors.push(`Missing English key: ${key}`);
  if (!(key in ur)) errors.push(`Missing Urdu key: ${key}`);
  if (key in en && !String(en[key]).trim()) errors.push(`Empty English translation: ${key}`);
  if (key in ur && !String(ur[key]).trim()) errors.push(`Empty Urdu translation: ${key}`);
  if (key in en && key in ur && placeholders(en[key]) !== placeholders(ur[key])) errors.push(`Placeholder mismatch: ${key}`);
}
const duplicates = (dictionary, locale) => { const seen = new Map(); for (const [key,value] of Object.entries(dictionary)) { if (seen.has(value)) console.warn(`Duplicate ${locale} value: ${seen.get(value)} and ${key}`); else seen.set(value,key); } };
duplicates(en,"English"); duplicates(ur,"Urdu");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Translation validation passed: ${Object.keys(en).length} matching keys.`);
