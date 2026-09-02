import Link from "next/link";
import { PageShell } from "@/components/page-shell";
export default function NotFound() { return <PageShell><section className="pageHero"><div className="container"><span className="eyebrow">404</span><h1>That page is not available.</h1><p className="lead">Return to the main service overview or contact us for help.</p><div className="actions"><Link className="button primary" href="/">Go home</Link><Link className="button secondary" href="/contact">Contact</Link></div></div></section></PageShell>; }
