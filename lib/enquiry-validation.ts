import { contactCategoryIds, contactServicesByCategory } from "@/lib/contact-services";

export type EnquiryPayload = { fullName: string; email: string; phone: string; area: string; category: string; service: string; propertyType: string; contactMethod: string; visitDate: string; details: string; consent: boolean; website: string; language: "English" | "Urdu" };
export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>;

const clean = (value: unknown, max: number) => String(value ?? "").replace(/[<>]/g, "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);

export function normaliseEnquiry(input: Record<string, unknown>): EnquiryPayload {
  return { fullName: clean(input.fullName, 80), email: clean(input.email, 150).toLowerCase(), phone: clean(input.phone, 20), area: clean(input.area, 100), category: clean(input.category, 50), service: clean(input.service, 100), propertyType: clean(input.propertyType, 30), contactMethod: clean(input.contactMethod, 20), visitDate: clean(input.visitDate, 10), details: clean(input.details, 1500), consent: input.consent === true || input.consent === "on", website: clean(input.website, 200), language: input.language === "Urdu" ? "Urdu" : "English" };
}

export function validateEnquiry(data: EnquiryPayload): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (data.fullName.length < 2) errors.fullName = "Enter your full name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!/^(?:\+?92|0)3\d{9}$/.test(data.phone.replace(/[\s()-]/g, ""))) errors.phone = "Enter a valid Pakistani mobile number, such as 03001234567.";
  if (data.area.length < 2) errors.area = "Enter your area in Lahore.";
  if (!contactCategoryIds.has(data.category)) errors.category = "Select a main service category.";
  if (!contactServicesByCategory.get(data.category)?.has(data.service)) errors.service = "Select a service from the chosen category.";
  if (data.propertyType && !["Residential","Commercial","Office","Shop","Other"].includes(data.propertyType)) errors.propertyType = "Select a valid property type.";
  if (!["Phone Call","Email"].includes(data.contactMethod)) errors.contactMethod = "Select a preferred contact method.";
  if (data.visitDate && !/^\d{4}-\d{2}-\d{2}$/.test(data.visitDate)) errors.visitDate = "Select a valid visit date.";
  if (data.details.length < 20) errors.details = "Please provide at least 20 characters about the required service.";
  if (!data.consent) errors.consent = "Consent is required before submitting the enquiry.";
  return errors;
}
