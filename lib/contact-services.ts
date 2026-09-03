import { categoryOrder, getCategoryMeta, servicesForCategory, type ServiceCategory } from "@/lib/service-catalog";

export const contactServiceOptions = categoryOrder.map((id) => ({
  id,
  label: getCategoryMeta(id).label,
  services: servicesForCategory(id).map((service) => ({ id: service.path, label: service.title })),
}));

export const contactCategoryIds = new Set<string>(categoryOrder);
export const contactServicesByCategory = new Map<string, Set<string>>(contactServiceOptions.map((category) => [category.id, new Set(category.services.map((service) => service.id))]));
export function contactCategoryLabel(id: string) { return getCategoryMeta(id as ServiceCategory).label; }
export function contactServiceLabel(categoryId: string, serviceId: string) { return contactServiceOptions.find((item) => item.id === categoryId)?.services.find((item) => item.id === serviceId)?.label || ""; }
