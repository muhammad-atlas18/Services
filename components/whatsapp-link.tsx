"use client";

import { whatsappMessage, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";

export function WhatsAppIcon() { return <svg aria-hidden="true" className="whatsappIcon" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-1.58-.79-2.62-1.41-3.66-3.21-.28-.48.28-.45.8-1.5.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.21-.51-.43-.44-.6-.45h-.51c-.18 0-.47.07-.71.34-.25.27-.94.92-.94 2.25 0 1.33.97 2.61 1.1 2.79.14.18 1.91 2.91 4.63 4.08.64.28 1.15.44 1.54.56.65.21 1.25.18 1.72.11.52-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.12-.25-.18-.52-.31Z"/><path d="M16.01 3.2A12.74 12.74 0 0 0 5.08 22.5L3.3 28.8l6.46-1.7A12.79 12.79 0 1 0 16 3.2Zm0 23.22c-2.05 0-4.06-.55-5.81-1.59l-.42-.25-3.83 1 1.02-3.72-.27-.44A10.41 10.41 0 1 1 16 26.42Z"/></svg> }

export function WhatsAppLink({ service, message, children = "Contact on WhatsApp", className = "button whatsappButton", position = "content" }: { service?: string; message?: string; children?: React.ReactNode; className?: string; position?: string }) {
  const label = typeof children === "string" ? children : "Contact on WhatsApp";
  return <a aria-label={`Contact on WhatsApp${service ? ` about ${service}` : ""}`} className={`${className} whatsappAction`} target="_blank" rel="noreferrer" href={whatsappUrl(message || whatsappMessage(service))} onClick={() => track({ event: "whatsapp_click", page_path: window.location.pathname, service: service || "general", cta_position: position, device_type: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop" })}><WhatsAppIcon /><span>{label}</span></a>;
}
