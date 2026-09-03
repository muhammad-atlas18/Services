"use client";

import { useEffect, useState } from "react";

const reviews = [
  { name: "Hamza Ahmed", initials: "HA", rating: "5.0", service: "Solar Installation", review: "Excellent installation service. The team was professional, explained everything clearly, and completed the work on time." },
  { name: "Usman Raza", initials: "UR", rating: "4.8", service: "Solar Repair", review: "Very good service. They quickly identified the solar system issue and fixed it properly. Highly recommended." },
  { name: "Bilal Khan", initials: "BK", rating: "5.0", service: "Electrical Work", review: "Great electrical work. The technician was skilled, punctual, and completed everything neatly. Very satisfied with the service." },
  { name: "Ahsan Malik", initials: "AM", rating: "4.7", service: "AC Repair", review: "Really good service. The technician arrived on time, diagnosed the problem quickly, and repaired the AC perfectly." },
  { name: "Fahad Iqbal", initials: "FI", rating: "5.0", service: "Solar Installation", review: "Excellent experience from start to finish. The installation was done professionally and the team was very cooperative." },
  { name: "Hassan Shah", initials: "HS", rating: "4.9", service: "Solar Repair", review: "Very professional and reliable service. My solar system was repaired quickly and is working perfectly now. Definitely recommended." },
];
const urduReviews = [
  { name:"Hamza Ahmed", initials:"HA", rating:"5.0", service:"سولر پینل کی تنصیب", review:"بہترین تنصیب کی سروس۔ ٹیم پیشہ ور تھی، ہر بات واضح طور پر سمجھائی اور کام وقت پر مکمل کیا۔" },
  { name:"Usman Raza", initials:"UR", rating:"4.8", service:"سولر سسٹم کی مرمت", review:"بہت اچھی سروس۔ انہوں نے سولر سسٹم کا مسئلہ جلد شناخت کرکے درست طریقے سے حل کیا۔ ضرور تجویز کروں گا۔" },
  { name:"Bilal Khan", initials:"BK", rating:"5.0", service:"الیکٹریکل کام", review:"بہترین الیکٹریکل کام۔ ٹیکنیشن ماہر اور وقت کا پابند تھا اور تمام کام صفائی سے مکمل کیا۔" },
  { name:"Ahsan Malik", initials:"AM", rating:"4.7", service:"اے سی کی مرمت", review:"واقعی اچھی سروس۔ ٹیکنیشن وقت پر پہنچا، مسئلہ جلد تشخیص کیا اور اے سی درست طریقے سے مرمت کیا۔" },
  { name:"Fahad Iqbal", initials:"FI", rating:"5.0", service:"سولر پینل کی تنصیب", review:"شروع سے آخر تک بہترین تجربہ۔ تنصیب پیشہ ورانہ انداز میں ہوئی اور ٹیم نے بھرپور تعاون کیا۔" },
  { name:"Hassan Shah", initials:"HS", rating:"4.9", service:"سولر سسٹم کی مرمت", review:"بہت پیشہ ورانہ اور قابلِ اعتماد سروس۔ میرا سولر سسٹم جلد مرمت ہوا اور اب بالکل درست کام کر رہا ہے۔" }
];

export function CustomerReviewCarousel({ locale = "en" }: { locale?: "en" | "ur" }) {
  const items = locale === "ur" ? urduReviews : reviews;
  const [first, setFirst] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setFirst((value) => (value + 1) % items.length), 3500); return () => window.clearInterval(timer); }, [items.length]);
  const visible = Array.from({ length: 4 }, (_, offset) => items[(first + offset) % items.length]);

  return <div className="customerReviewViewport" aria-label="Customer reviews carousel">
    <div className="customerReviewGrid" key={first}>{visible.map((item) => <article className="customerReviewCard" key={item.name}><div className="reviewCardTop"><span className="reviewAvatar" aria-hidden="true">{item.initials}</span><div><h3>{item.name}</h3><span>{item.service}</span></div><strong>{item.rating}</strong></div><div className="reviewStars" aria-label={`${item.rating} out of 5 stars`}>★★★★★</div><blockquote>“{item.review}”</blockquote><span className="verifiedReview"><b aria-hidden="true">✓</b> Customer review</span></article>)}</div>
    <div className="reviewCarouselProgress" aria-hidden="true">{items.map((item, index) => <span className={index === first ? "active" : ""} key={item.name} />)}</div>
  </div>;
}
