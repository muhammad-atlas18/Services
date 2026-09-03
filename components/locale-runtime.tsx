"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import en from "@/locales/en.json";
import ur from "@/locales/ur.json";
import { getLocaleFromPath, localizePath } from "@/i18n/config";

const translations = new Map(Object.keys(en).map((key) => [en[key as keyof typeof en], ur[key as keyof typeof ur]]));
const extra: Record<string, string> = {
  "What we do":"ہم کیا کرتے ہیں", "How it works":"کام کا طریقہ", "Customer trust":"صارفین کا اعتماد", "Reviews & ratings":"تجزیے اور ریٹنگز",
  "Professional support · Lahore":"پیشہ ورانہ معاونت · لاہور", "Our process":"ہمارا طریقۂ کار", "Important information":"اہم معلومات", "Useful answers":"مفید جوابات",
  "Service overview":"سروس کا جائزہ", "What this service includes":"اس سروس میں کیا شامل ہے", "Common problems & warning signs":"عام مسائل اور انتباہی علامات",
  "How the service works":"سروس کا طریقۂ کار", "Why choose this service":"اس سروس کا انتخاب کیوں کریں", "Service questions":"سروس سے متعلق سوالات",
  "Need this service?":"یہ سروس درکار ہے؟", "Lahore service area":"لاہور کا سروس ایریا", "Quotation after assessment":"جائزے کے بعد کوٹیشن",
  "Need professional support?":"پیشہ ورانہ مدد درکار ہے؟", "Lahore service support":"لاہور میں سروس سپورٹ", "Need Professional Help With This Service?":"اس سروس کے لیے پیشہ ورانہ مدد درکار ہے؟",
  "Choose the service that fits your requirement.":"اپنی ضرورت کے مطابق سروس منتخب کریں۔", "How the service process works.":"سروس کا طریقۂ کار کیسے کام کرتا ہے۔",
  "Clear steps from enquiry to handover.":"درخواست سے کام کی حوالگی تک واضح مراحل۔", "Work matched to the confirmed scope.":"تصدیق شدہ کام کے مطابق خدمات۔",
  "Situations we can assess.":"وہ مسائل جن کا ہم جائزہ لے سکتے ہیں۔", "A clear, requirement-led approach.":"ضرورت کے مطابق واضح اور منظم طریقہ۔",
  "Explore other services for your property.":"اپنی پراپرٹی کے لیے دوسری خدمات دیکھیں۔", "Planning the right work for your property.":"آپ کی پراپرٹی کے لیے درست کام کی منصوبہ بندی۔",
  "Choose your service":"اپنی سروس منتخب کریں", "Share the requirement":"اپنی ضرورت بتائیں", "Assessment":"جائزہ", "Scope & quotation":"کام کی تفصیل اور کوٹیشن", "Work & handover":"کام اور حوالگی",
  "Choose a service":"سروس منتخب کریں", "Share your requirement":"اپنی ضرورت بتائیں", "Confirm the scope":"کام کی تفصیل کی تصدیق", "Complete and test":"کام مکمل کرنا اور جانچ",
  "Service enquiries":"سروس کی درخواستیں", "Contact Our Service Team":"ہماری سروس ٹیم سے رابطہ کریں", "Enquiry form":"درخواست فارم", "Send Us Your Enquiry":"ہمیں اپنی درخواست بھیجیں",
  "Before you submit":"درخواست جمع کرنے سے پہلے", "What happens next?":"اس کے بعد کیا ہوگا؟", "Your information matters.":"آپ کی معلومات اہم ہیں۔",
  "Available Services":"دستیاب خدمات", "Response Process":"جواب دینے کا طریقہ", "Important Note":"اہم نوٹ", "Email":"ای میل",
  "About GharMahir":"GharMahir کے بارے میں", "Our Service Area":"ہماری خدمات کا علاقہ", "Serving Lahore":"لاہور میں خدمات",
  "Explore Solar Services":"سولر سروسز دیکھیں", "Explore Electrical Services":"الیکٹریکل سروسز دیکھیں", "Explore AC Services":"اے سی سروسز دیکھیں",
  "Solar Energy Solutions":"سولر توانائی کے حل", "Electrical Installation & Repair":"الیکٹریکل تنصیب اور مرمت", "AC Installation & Maintenance":"اے سی تنصیب اور دیکھ بھال",
  "Professional Solar Services in Lahore":"لاہور میں پیشہ ورانہ سولر سروسز", "Reliable Electrical Services for Your Property":"آپ کی پراپرٹی کے لیے قابلِ اعتماد الیکٹریکل سروسز", "Professional AC Services in Lahore":"لاہور میں پیشہ ورانہ اے سی سروسز",
  "Current service promotions":"موجودہ سروس آفرز", "Complete service directory":"خدمات کی مکمل فہرست", "Company":"ادارہ", "Information":"معلومات", "Service areas":"خدمات کے علاقے",
  "Phone":"فون", "Number to be confirmed":"نمبر کی تصدیق باقی ہے", "Safety:":"حفاظت:", "Breadcrumb":"صفحاتی راستہ", "Optional":"اختیاری"
  ,"Enter your full name (at least 2 characters).":"اپنا مکمل نام درج کریں، کم از کم 2 حروف۔", "Enter a valid email address.":"درست ای میل ایڈریس درج کریں۔", "Enter a valid Pakistani mobile number, such as 03001234567.":"پاکستان کا درست موبائل نمبر درج کریں، مثلاً 03001234567۔", "Enter your area in Lahore.":"لاہور میں اپنا علاقہ درج کریں۔", "Select a main service category.":"مرکزی سروس کی قسم منتخب کریں۔", "Select a service from the chosen category.":"منتخب قسم میں سے سروس منتخب کریں۔", "Select a valid property type.":"درست پراپرٹی کی قسم منتخب کریں۔", "Select a preferred contact method.":"رابطے کا ترجیحی طریقہ منتخب کریں۔", "Select a valid visit date.":"وزٹ کی درست تاریخ منتخب کریں۔", "Please provide at least 20 characters about the required service.":"مطلوبہ سروس کے بارے میں کم از کم 20 حروف لکھیں۔", "Consent is required before submitting the enquiry.":"درخواست جمع کرنے سے پہلے رضامندی ضروری ہے۔",
  "Submission unsuccessful.":"درخواست جمع نہیں ہو سکی۔", "We could not submit your enquiry at this time. Please review your details and try again.":"اس وقت درخواست جمع نہیں ہو سکی۔ اپنی معلومات چیک کرکے دوبارہ کوشش کریں۔", "Please describe the installation, repair, maintenance or fault you need help with.":"تنصیب، مرمت، دیکھ بھال یا خرابی کی تفصیل لکھیں جس کے لیے مدد درکار ہے۔",
  "Solar Panel Installation par 10% Discount — Limited-Time Offer":"سولر پینل کی تنصیب پر 10% رعایت — محدود مدت کی پیشکش", "Professional Electrical Services Available Across Lahore":"لاہور بھر میں پیشہ ورانہ الیکٹریکل سروسز دستیاب ہیں", "AC Installation, Repair & Maintenance — Book on WhatsApp":"اے سی تنصیب، مرمت اور دیکھ بھال — واٹس ایپ پر بک کریں", "Reliable Home Appliance Repair at Your Doorstep":"قابلِ اعتماد گھریلو آلات کی مرمت آپ کی دہلیز پر"
  ,"How It Works":"کام کا طریقہ", "Useful Answers":"مفید جوابات", "Before you book":"بکنگ سے پہلے", "Customer review":"صارف کا تجزیہ", "Project gallery":"پروجیکٹ گیلری", "Selected work":"منتخب کام", "Project Showcases":"پروجیکٹس کی جھلک", "Scope highlights":"کام کی اہم تفصیل", "Project outcome":"پروجیکٹ کا نتیجہ", "Plan your requirement":"اپنی ضرورت کی منصوبہ بندی کریں",
  "All Services":"تمام خدمات", "Contact Options":"رابطے کے ذرائع", "Terms & Conditions":"شرائط و ضوابط", "Service availability and final scope are confirmed after assessment.":"سروس کی دستیابی اور حتمی کام کی تصدیق جائزے کے بعد کی جاتی ہے۔", "Select a service to review its scope, common problems, process and useful answers.":"کام کی تفصیل، عام مسائل، طریقۂ کار اور مفید جوابات دیکھنے کے لیے سروس منتخب کریں۔",
  "We have received your service enquiry. Our team will review the details and contact you using your preferred contact method.":"ہمیں آپ کی سروس درخواست موصول ہو گئی ہے۔ ہماری ٹیم تفصیلات دیکھ کر آپ کے ترجیحی رابطے کے ذریعے جواب دے گی۔", "I agree that my information may be used to respond to this service enquiry. I have read the":"میں رضامند ہوں کہ میری معلومات اس سروس درخواست کا جواب دینے کے لیے استعمال کی جا سکتی ہیں۔ میں نے پڑھ لی ہے:", "characters":"حروف",
  "That page is not available.":"یہ صفحہ دستیاب نہیں ہے۔", "Return to the main service overview or contact us for help.":"مرکزی خدمات کے صفحے پر واپس جائیں یا مدد کے لیے رابطہ کریں۔", "Go home":"ہوم پر جائیں", "Contact":"رابطہ"
  ,"Privacy & data handling":"رازداری اور معلومات کا انتظام", "Service & website terms":"سروس اور ویب سائٹ کی شرائط", "Legal review required before publication":"اشاعت سے پہلے قانونی جائزہ ضروری ہے", "A plain-language explanation of how information is handled across our Lahore service website, contact form and WhatsApp enquiry journey.":"لاہور کی ہماری سروس ویب سائٹ، رابطہ فارم اور واٹس ایپ درخواست کے دوران معلومات کے استعمال کی آسان وضاحت۔", "The terms that apply when you browse our website, request a quotation or arrange Solar, Electrical, AC or Home Appliance work in Lahore.":"وہ شرائط جو ویب سائٹ استعمال کرنے، کوٹیشن مانگنے یا لاہور میں سولر، الیکٹریکل، اے سی یا گھریلو آلات کی سروس طے کرنے پر لاگو ہوتی ہیں۔",
  "Introduction":"تعارف", "Information we may collect":"وہ معلومات جو ہم حاصل کر سکتے ہیں", "How information is collected":"معلومات کیسے حاصل کی جاتی ہیں", "Purposes for using information":"معلومات استعمال کرنے کے مقاصد", "Lawful and fair processing":"قانونی اور منصفانہ استعمال", "WhatsApp and third-party communication":"واٹس ایپ اور فریقِ ثالث سے رابطہ", "Cookies and analytics":"کوکیز اور تجزیاتی معلومات", "Sharing of information":"معلومات کا اشتراک", "Customer photographs and property information":"صارف کی تصاویر اور پراپرٹی کی معلومات", "Data storage and security":"معلومات کا ذخیرہ اور حفاظت", "Data retention":"معلومات محفوظ رکھنے کی مدت", "International or cloud processing":"بین الاقوامی یا کلاؤڈ پراسیسنگ", "Your choices and requests":"آپ کے اختیارات اور درخواستیں", "Marketing communications":"تشہیری رابطہ", "Children’s privacy":"بچوں کی رازداری", "Third-party links":"فریقِ ثالث کے لنکس", "Data incidents":"معلومات سے متعلق واقعات", "Policy updates":"پالیسی میں تبدیلیاں", "Contact and privacy enquiries":"رابطہ اور رازداری کی درخواستیں",
  "About these terms":"ان شرائط کے بارے میں", "Business details":"کاروباری تفصیلات", "Service area":"خدمات کا علاقہ", "Services offered":"دستیاب خدمات", "Website information":"ویب سائٹ کی معلومات", "Website and WhatsApp enquiries":"ویب سائٹ اور واٹس ایپ درخواستیں", "Inspection and diagnosis":"معائنہ اور تشخیص", "Quotations and estimates":"کوٹیشن اور تخمینہ", "When an agreement is formed":"معاہدہ کب بنتا ہے", "Customer responsibilities":"صارف کی ذمہ داریاں", "Safety and site access":"حفاظت اور موقع تک رسائی", "Solar service conditions":"سولر سروس کی شرائط", "Electrical service conditions":"الیکٹریکل سروس کی شرائط", "AC service conditions":"اے سی سروس کی شرائط", "Home Appliance service conditions":"گھریلو آلات کی سروس کی شرائط", "Materials and replacement parts":"سامان اور متبادل پرزے", "Changes and additional work":"تبدیلیاں اور اضافی کام", "Prices and payment":"قیمتیں اور ادائیگی", "Appointments and delays":"اپائنٹمنٹ اور تاخیر", "Cancellation and rescheduling":"منسوخی اور دوبارہ وقت طے کرنا", "Completion and handover":"تکمیل اور حوالگی", "Workmanship and product warranties":"کام اور مصنوعات کی وارنٹی", "Complaints and remedial process":"شکایات اور ازالے کا طریقہ", "Liability":"ذمہ داری", "Third-party products and manufacturers":"فریقِ ثالث کی مصنوعات اور مینوفیکچررز", "Illustrative and AI-assisted images":"مثالی اور AI سے تیار تصاویر", "Acceptable website use":"ویب سائٹ کا قابلِ قبول استعمال", "Intellectual property":"دانشورانہ ملکیت", "Events beyond reasonable control":"اختیار سے باہر واقعات", "Right to refuse or stop work":"کام سے انکار یا روکنے کا حق", "Governing law and disputes":"قابلِ اطلاق قانون اور تنازعات", "Severability, waiver and entire agreement":"شقوں کی علیحدگی، دستبرداری اور مکمل معاہدہ", "Changes to these terms":"شرائط میں تبدیلیاں", "Contact us":"ہم سے رابطہ کریں"
};

function serviceName(value: string) { return translations.get(value) || extra[value] || value; }
function translate(value: string) {
  const direct = translations.get(value) || extra[value];
  if (direct) return direct;
  let match = value.match(/^Contact on WhatsApp for (.+)$/); if (match) return `${serviceName(match[1])} کے لیے واٹس ایپ پر رابطہ کریں`;
  match = value.match(/^View (.+) Services$/); if (match) return `${serviceName(match[1])} کی خدمات دیکھیں`;
  match = value.match(/^Related (.+) services$/i); if (match) return `متعلقہ ${serviceName(match[1])} سروسز`;
  match = value.match(/^Our (.+) services$/i); if (match) return `ہماری ${serviceName(match[1])} سروسز`;
  return value;
}

function translateTextNode(node: Text) {
  const value = node.nodeValue || ""; const trimmed = value.trim(); if (!trimmed) return;
  const translated = translate(trimmed); if (translated !== trimmed) node.nodeValue = value.replace(trimmed, translated);
}

function translateTree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root as Text);
  if (!(root instanceof Element)) return;
  if (root.matches("script,style,[data-no-translate]")) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let node: Node | null;
  while ((node = walker.nextNode())) { const parent = node.parentElement; if (parent && !parent.matches("script,style,[data-no-translate]")) translateTextNode(node as Text); }
  for (const attribute of ["aria-label", "placeholder", "title", "alt"]) { const value = root.getAttribute(attribute); if (value) root.setAttribute(attribute, translate(value)); }
  root.querySelectorAll<HTMLElement>("[aria-label],[placeholder],[title],[alt]").forEach((element) => { for (const attribute of ["aria-label", "placeholder", "title", "alt"]) { const value = element.getAttribute(attribute); if (value) element.setAttribute(attribute, translate(value)); } });
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => { const href = anchor.getAttribute("href") || ""; if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/ur") && !href.startsWith("/api")) anchor.setAttribute("href", localizePath(href, "ur")); });
}

export function LocaleRuntime() {
  const pathname = usePathname(); const locale = getLocaleFromPath(pathname);
  useEffect(() => {
    document.documentElement.lang = locale; document.documentElement.dir = locale === "ur" ? "rtl" : "ltr";
    if (locale !== "ur") return;
    let observer: MutationObserver | undefined;
    const timer = window.setTimeout(() => {
      translateTree(document.body);
      observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach(translateTree)));
      observer.observe(document.body, { childList:true, subtree:true });
    }, 750);
    return () => { window.clearTimeout(timer); observer?.disconnect(); };
  }, [locale, pathname]);
  return null;
}
