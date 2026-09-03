import Link from "next/link";
import { categoryOrder, getCategoryMeta, servicesForCategory } from "@/lib/service-catalog";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return <footer className="siteFooter"><div className="container">
    <div className="footerDirectory"><div className="footerDirectoryHeading"><BrandLogo className="footerBrandLogo" /><p>Select a service to review its scope, common problems, process and useful answers.</p></div><div className="footerServiceGrid">{categoryOrder.map((category) => { const meta = getCategoryMeta(category); return <section className="footerServiceColumn" key={category}><Link className="footerCategoryLink" href={meta.route}>{meta.label}<span aria-hidden="true">→</span></Link><ul>{servicesForCategory(category).map((service) => <li key={service.path}><Link href={service.route}>{service.title}</Link></li>)}</ul></section>; })}</div></div>

    <div className="footerInfoGrid"><div><h3>Service areas</h3><p>DHA · Gulberg · Johar Town · Model Town · Wapda Town · Bahria Town · Valencia · Faisal Town · Garden Town · Cantt · Allama Iqbal Town · Township</p></div><nav aria-label="Company links"><h3>Company</h3><Link href="/about">About GharMahir</Link><Link href="/projects">Project Showcases</Link><Link href="/contact">Contact Options</Link></nav><nav aria-label="Information links"><h3>Information</h3><Link href="/#services">All Services</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></nav></div>

    <div className="footerBottom"><span>© {new Date().getFullYear()} GharMahir. All rights reserved.</span><span>Service availability and final scope are confirmed after assessment.</span><Link href="#main">Back to top ↑</Link></div>
  </div></footer>;
}
