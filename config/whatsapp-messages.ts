export type WhatsAppContext = { serviceId?: string; categoryId?: string; sourcePage?: string; serviceName?: string; locale?: "en" | "ur" };

const urduServiceNames: Record<string, string> = {
  "solar-system-design":"سولر سسٹم کی ڈیزائننگ اور منصوبہ بندی", "solar-installation":"سولر پینل کی تنصیب", "solar-system-setup":"سولر سسٹم کنکشن اور سیٹ اَپ", "solar-inverter-battery":"سولر اِنورٹر اور بیٹری کی خدمات", "solar-troubleshooting":"سولر پینل کی خرابی کی تشخیص", "solar-repair":"سولر سسٹم کی مرمت اور خرابی کی تشخیص", "solar-cleaning":"سولر پینل کی صفائی اور دھلائی", "solar-maintenance":"سولر پینل کی دیکھ بھال", "electrical-new-wiring":"نئی الیکٹریکل وائرنگ", "electrical-rewiring":"پرانی وائرنگ کی مرمت اور دوبارہ وائرنگ", "electrical-fault-repair":"برقی خرابی کی تشخیص اور مرمت", "electrical-distribution-board":"ڈسٹری بیوشن بورڈ اور سرکٹ بریکر کی خدمات", "electrical-fixtures":"سوئچ، ساکٹ، لائٹس اور پنکھوں کی خدمات", "ac-installation":"اے سی کی تنصیب", "ac-repair":"اے سی کی مرمت اور خرابی کی تشخیص", "ac-maintenance":"اے سی کی دیکھ بھال اور سروس", "ac-shifting":"اے سی کی منتقلی اور دوبارہ تنصیب", "ac-leakage":"اے سی لیکیج اور کولنگ کی تشخیص", "refrigerator-repair":"ریفریجریٹر اور فریزر کی مرمت", "washing-machine-repair":"واشنگ مشین کی مرمت", "microwave-repair":"مائیکروویو اوون کی مرمت", "water-dispenser-repair":"واٹر ڈسپنسر کی مرمت", "oven-repair":"الیکٹرک اوون اور کوکنگ رینج کی مرمت", "dishwasher-repair":"ڈش واشر کی مرمت"
};
const urduCategoryNames: Record<string, string> = { solar:"سولر سروسز", electrical:"الیکٹریکل سروسز", ac:"اے سی سروسز", "home-appliances":"گھریلو برقی آلات کی خدمات" };
const urduServiceAliases = Object.fromEntries(Object.entries(urduServiceNames).map(([id, name]) => [name.toLowerCase(), id]));
const urduMessage = (name: string) => `السلام علیکم،\n\nمجھے لاہور میں *${name}* کی سروس درکار ہے۔\n\nبراہِ کرم سروس کی دستیابی، ٹیکنیشن کے وزٹ اور کوٹیشن کے طریقۂ کار کے بارے میں آگاہ کر دیں۔\n\nحوالہ: ویب سائٹ — ${name}\n\nشکریہ۔`;
const urduGeneral = `السلام علیکم،\n\nمیں GharMahir ویب سائٹ سے رابطہ کر رہا/رہی ہوں اور لاہور میں گھریلو سروس کے متعلق معلومات درکار ہیں۔\n\nبراہِ کرم دستیاب خدمات اور بکنگ کے طریقۂ کار کے بارے میں آگاہ کر دیں۔\n\nحوالہ: ویب سائٹ — عمومی درخواست\n\nشکریہ۔`;

const format = (name: string, request: string, process: string) => `Assalam-o-Alaikum,\n\nMujhe Lahore mein *${name}* service chahiye.${request ? ` ${request}` : ""}\n\nBarah-e-karam ${process} share kar dein.\n\nReference: Website – ${name}\n\nShukriya.`;

export const generalWhatsAppMessage = `Assalam-o-Alaikum,\n\nMain aapki website se contact kar raha/rahi hoon aur Lahore mein home service ke mutaliq information chahiye.\n\nBarah-e-karam available services aur booking process share kar dein.\n\nReference: Website – General Enquiry\n\nShukriya.`;

export const contactWhatsAppMessage = `Assalam-o-Alaikum,\n\nMain aapki website ke Contact page se rabta kar raha/rahi hoon. Mujhe Lahore mein aapki services ke mutaliq information aur assistance chahiye.\n\nBarah-e-karam available services aur booking process share kar dein.\n\nReference: Website – Contact Page\n\nShukriya.`;

export const aboutWhatsAppMessage = `Assalam-o-Alaikum,\n\nMain aapki website ke About page se contact kar raha/rahi hoon. Mujhe Lahore mein aapki technical services ke mutaliq information chahiye.\n\nBarah-e-karam available services aur booking process share kar dein.\n\nReference: Website – About Us\n\nShukriya.`;

export const categoryWhatsAppMessages: Record<string, string> = {
  solar: `Assalam-o-Alaikum,\n\nMujhe Lahore mein *Solar Services* ke mutaliq information aur professional assistance chahiye.\n\nBarah-e-karam available solar services, site visit aur quotation process share kar dein.\n\nReference: Website – Solar Services\n\nShukriya.`,
  electrical: `Assalam-o-Alaikum,\n\nMujhe Lahore mein *Electrical Services* ke liye professional electrician chahiye.\n\nBarah-e-karam available services, electrician visit aur quotation process share kar dein.\n\nReference: Website – Electrical Services\n\nShukriya.`,
  ac: `Assalam-o-Alaikum,\n\nMujhe Lahore mein *AC Services* ke mutaliq information aur technician assistance chahiye.\n\nBarah-e-karam available AC services, technician visit aur quotation process share kar dein.\n\nReference: Website – AC Services\n\nShukriya.`,
  "home-appliances": `Assalam-o-Alaikum,\n\nMujhe Lahore mein *Home Appliance Repair Service* chahiye.\n\nBarah-e-karam available appliance services, technician visit aur quotation process share kar dein.\n\nReference: Website – Home Appliance Services\n\nShukriya.`,
};

export const serviceWhatsAppMessages: Record<string, string> = {
  "solar-system-design": format("Solar System Design & Planning", "Main apni property ki electricity requirements ke mutabiq suitable solar system design karwana chahta/chahti hoon.", "site assessment, recommended system capacity aur quotation process"),
  "solar-installation": format("Solar Panel Installation", "", "installation availability, site visit aur quotation process"),
  "solar-system-setup": format("Solar System Connection & Setup", "Solar panels, inverter, batteries aur electrical system ki proper connection aur configuration karwani hai.", "technician availability aur visit process"),
  "solar-inverter-battery": format("Solar Inverter & Battery Service", "Inverter ya battery system ki inspection, setup ya repair karwani hai.", "technician availability aur inspection process").replace("Reference: Website – Solar Inverter & Battery Service", "Reference: Website – Solar Inverter & Battery Services"),
  "solar-troubleshooting": format("Solar Panel Troubleshooting", "Solar system ki performance ya output mein masla aa raha hai.", "fault inspection aur technician visit process"),
  "solar-repair": format("Solar System Repair & Fault Diagnosis", "Solar system ka fault professionally diagnose aur repair karwana hai.", "technician availability aur inspection process"),
  "solar-cleaning": format("Solar Panel Cleaning & Washing", "", "cleaning service ki availability, visit process aur quotation details"),
  "solar-maintenance": format("Solar Panel Maintenance", "Solar system ki complete inspection aur preventive maintenance karwani hai.", "maintenance visit aur quotation process"),
  "electrical-new-wiring": format("New Electrical Wiring", "Property ke liye safe aur professional electrical wiring karwani hai.", "electrician availability, site visit aur quotation process"),
  "electrical-rewiring": format("Old Wiring Repair & Rewiring", "Existing wiring ki inspection aur zaroorat ke mutabiq repair ya replacement karwani hai.", "electrician visit aur inspection process"),
  "electrical-fault-repair": format("Electrical Fault Diagnosis & Repair", "Electrical system mein fault aa raha hai aur professional inspection karwani hai.", "electrician availability aur visit process"),
  "electrical-distribution-board": format("Distribution Board & Circuit Breaker Service", "DB panel ya circuit breaker ki inspection, installation ya repair karwani hai.", "electrician availability aur quotation process").replace("Reference: Website – Distribution Board & Circuit Breaker Service", "Reference: Website – Distribution Board & Circuit Breaker Services"),
  "electrical-fixtures": format("Switches, Sockets, Lights & Fan Service", "Installation ya repair ke liye electrician required hai.", "availability aur visit process").replace("Reference: Website – Switches, Sockets, Lights & Fan Service", "Reference: Website – Switches, Sockets, Lights & Fan Services"),
  "ac-installation": format("AC Installation", "", "technician availability, installation process aur quotation details"),
  "ac-repair": format("AC Repair & Fault Diagnosis", "AC mein fault aa raha hai aur professional inspection karwani hai.", "technician availability aur visit process"),
  "ac-maintenance": format("AC Maintenance & Servicing", "AC ki complete inspection, cleaning aur servicing karwani hai.", "technician availability aur service process"),
  "ac-shifting": format("AC Shifting & Reinstallation", "AC ko safely remove karke doosri location par reinstall karwana hai.", "technician availability aur quotation process"),
  "ac-leakage": format("AC Leakage & Cooling Diagnosis", "AC ki cooling ya water/gas leakage ka masla check karwana hai.", "technician availability aur inspection process"),
  "refrigerator-repair": format("Refrigerator & Freezer Repair", "Appliance ki cooling ya performance ka masla professionally diagnose karwana hai.", "technician availability aur visit process"),
  "washing-machine-repair": format("Washing Machine Repair", "Machine ka fault professionally inspect aur repair karwana hai.", "technician availability aur visit process"),
  "microwave-repair": format("Microwave Oven Repair", "Microwave ka fault professionally diagnose aur repair karwana hai.", "technician availability aur inspection process"),
  "water-dispenser-repair": format("Water Dispenser Repair", "Dispenser ki cooling, heating ya leakage ka masla check karwana hai.", "technician availability aur visit process"),
  "oven-repair": format("Electric Oven & Cooking Range Repair", "Appliance ka fault professionally inspect aur repair karwana hai.", "technician availability aur visit process"),
  "dishwasher-repair": format("Dishwasher Repair", "Dishwasher ka fault professionally diagnose aur repair karwana hai.", "technician availability aur visit process"),
};

const aliases: Record<string, string> = {
  "solar/system-design":"solar-system-design", "solar system design & planning":"solar-system-design",
  "solar/panel-installation":"solar-installation", "solar panel installation":"solar-installation",
  "solar/system-setup":"solar-system-setup", "solar system connection & setup":"solar-system-setup", "solar connection and setup":"solar-system-setup",
  "solar/inverter-battery":"solar-inverter-battery", "solar inverter & battery services":"solar-inverter-battery", "inverter and battery services":"solar-inverter-battery",
  "solar/troubleshooting":"solar-troubleshooting", "solar panel troubleshooting":"solar-troubleshooting",
  "solar/repair":"solar-repair", "solar system repair & fault diagnosis":"solar-repair", "solar system repair and diagnostics":"solar-repair",
  "solar/panel-cleaning":"solar-cleaning", "solar panel cleaning & washing":"solar-cleaning",
  "solar/maintenance":"solar-maintenance", "solar panel maintenance":"solar-maintenance",
  "electrical/new-wiring":"electrical-new-wiring", "new electrical wiring":"electrical-new-wiring",
  "electrical/rewiring":"electrical-rewiring", "old wiring repair & rewiring":"electrical-rewiring", "electrical rewiring and upgrades":"electrical-rewiring",
  "electrical/fault-repair":"electrical-fault-repair", "electrical fault diagnosis & repair":"electrical-fault-repair", "electrical fault finding and repair":"electrical-fault-repair",
  "electrical/distribution-board":"electrical-distribution-board", "distribution board & circuit breaker services":"electrical-distribution-board", "distribution board and breaker work":"electrical-distribution-board",
  "electrical/fixtures":"electrical-fixtures", "switches, sockets, lights & fan services":"electrical-fixtures", "switch, socket, lighting and fan services":"electrical-fixtures",
  "ac/installation":"ac-installation", "ac installation":"ac-installation", "ac/repair":"ac-repair", "ac repair":"ac-repair", "ac repair & fault diagnosis":"ac-repair",
  "ac/maintenance":"ac-maintenance", "ac maintenance & servicing":"ac-maintenance", "ac service and maintenance":"ac-maintenance",
  "ac/shifting":"ac-shifting", "ac shifting & reinstallation":"ac-shifting", "ac removal and shifting":"ac-shifting",
  "ac/leakage-diagnosis":"ac-leakage", "ac leakage & cooling diagnosis":"ac-leakage", "ac leakage and cooling diagnosis":"ac-leakage",
  "home-appliances/refrigerator-repair":"refrigerator-repair", "refrigerator & freezer repair":"refrigerator-repair",
  "home-appliances/washing-machine-repair":"washing-machine-repair", "washing machine repair":"washing-machine-repair",
  "home-appliances/microwave-repair":"microwave-repair", "microwave oven repair":"microwave-repair",
  "home-appliances/water-dispenser-repair":"water-dispenser-repair", "water dispenser repair":"water-dispenser-repair",
  "home-appliances/oven-cooking-range-repair":"oven-repair", "electric oven & cooking range repair":"oven-repair",
  "home-appliances/dishwasher-repair":"dishwasher-repair", "dishwasher repair":"dishwasher-repair",
};

const categoryAliases: Record<string, string> = { "solar services":"solar", solar:"solar", "electrical services":"electrical", electrical:"electrical", "ac services":"ac", ac:"ac", "home appliance services":"home-appliances", "home appliance":"home-appliances", "home appliances":"home-appliances" };

export function getWhatsAppMessage(context: WhatsAppContext = {}) {
  if (context.locale === "ur") {
    const requestedUrdu = (context.serviceId || context.serviceName || "").trim().toLowerCase();
    const serviceIdUrdu = urduServiceNames[requestedUrdu] ? requestedUrdu : aliases[requestedUrdu] || urduServiceAliases[requestedUrdu];
    if (serviceIdUrdu) return urduMessage(urduServiceNames[serviceIdUrdu]);
    const matchedCategory = Object.entries(urduCategoryNames).find(([, name]) => requestedUrdu.includes(name) || requestedUrdu.startsWith(name.split(" ")[0]))?.[0];
    const categoryUrdu = (context.categoryId || categoryAliases[requestedUrdu] || matchedCategory || "").trim().toLowerCase();
    if (urduCategoryNames[categoryUrdu]) return urduMessage(urduCategoryNames[categoryUrdu]);
    if (context.sourcePage === "contact") return `السلام علیکم،\n\nمیں ویب سائٹ کے رابطہ صفحے سے رابطہ کر رہا/رہی ہوں۔ مجھے لاہور میں دستیاب خدمات اور بکنگ کے طریقۂ کار کے متعلق معلومات درکار ہیں۔\n\nحوالہ: ویب سائٹ — رابطہ صفحہ\n\nشکریہ۔`;
    if (context.sourcePage === "about") return `السلام علیکم،\n\nمیں GharMahir کے بارے میں مزید معلومات اور لاہور میں دستیاب تکنیکی خدمات کے متعلق رہنمائی چاہتا/چاہتی ہوں۔\n\nحوالہ: ویب سائٹ — ہمارے بارے میں\n\nشکریہ۔`;
    return urduGeneral;
  }
  if (context.sourcePage === "contact") return contactWhatsAppMessage;
  if (context.sourcePage === "about") return aboutWhatsAppMessage;
  const requested = (context.serviceId || context.serviceName || "").trim().toLowerCase();
  const serviceId = serviceWhatsAppMessages[requested] ? requested : aliases[requested];
  if (serviceId) return serviceWhatsAppMessages[serviceId];
  const category = (context.categoryId || categoryAliases[requested] || "").trim().toLowerCase();
  return categoryWhatsAppMessages[category] || generalWhatsAppMessage;
}
