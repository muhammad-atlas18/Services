export type Announcement = {
  id: string;
  text: string;
  highlight?: string;
  href?: string;
  categoryId?: string;
  enabled: boolean;
  accessibleLabel: string;
};

export const announcements: Announcement[] = [
  { id: "solar-discount", text: "Solar Panel Installation par 10% Discount — Limited-Time Offer", highlight: "10% Discount", href: "/services/solar/panel-installation", enabled: true, accessibleLabel: "View the Solar Panel Installation 10 percent discount offer" },
  { id: "electrical-lahore", text: "Professional Electrical Services Available Across Lahore", href: "/services/electrical", enabled: true, accessibleLabel: "Explore professional Electrical Services across Lahore" },
  { id: "ac-whatsapp", text: "AC Installation, Repair & Maintenance — Book on WhatsApp", categoryId: "ac", enabled: true, accessibleLabel: "Contact AC Services on WhatsApp" },
  { id: "appliance-repair", text: "Reliable Home Appliance Repair at Your Doorstep", href: "/services/home-appliances", enabled: true, accessibleLabel: "Explore Home Appliance Repair Services" },
];
