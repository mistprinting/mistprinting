import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { canonicalUrl, siteConfig } from "../site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Get a Custom Printing Quote",
  description: "Start a quote for DTF apparel, stickers, decals, bulk printing, sports, church, business, reunion, or event orders.",
  alternates: { canonical: canonicalUrl("/contact") },
};

export default function ContactPage() {
  return <><SiteHeader /><main>
    <PageHero title="Tell us what" accent="you're printing." description="A few useful details are enough to start. Mist Printing will help turn them into a clear production plan." />
    <section className="contact-layout">
      <div className="quote-checklist"><h2>What to include in your quote</h2><ol><li><span>01</span><div><h3>What you need</h3><p>Apparel, stickers, decals, or a coordinated mix.</p></div></li><li><span>02</span><div><h3>Approximate quantity</h3><p>A useful estimate helps define the scope.</p></div></li><li><span>03</span><div><h3>Your desired date</h3><p>Share when the completed order is needed.</p></div></li><li><span>04</span><div><h3>Your artwork</h3><p>Attach it if ready, or describe the idea you have.</p></div></li><li><span>05</span><div><h3>Where it is going</h3><p>Tell us whether the order is local or needs shipping.</p></div></li></ol></div>
      <div className="form-handoff"><h2>{siteConfig.notionQuoteUrl ? "Ready to get started?" : "Quote form coming soon."}</h2><p>{siteConfig.notionQuoteUrl ? "Open the short quote form to share your project details." : "The Mist Printing quote form is being connected. In the meantime, explore services and recent work so you can gather the details for your request."}</p>{siteConfig.notionQuoteUrl ? <a className="button" href={siteConfig.notionQuoteUrl} target="_blank" rel="noreferrer">Open quote form ↗</a> : <span className="button button-disabled" aria-disabled="true">Form connection pending</span>}<p className="privacy-note">Quote information will be handled according to the <Link href="/privacy">privacy policy</Link>.</p></div>
    </section>
    <section className="contact-links"><Link href="/services"><span>Not sure what service fits?</span><strong>Explore services ↗</strong></Link><Link href="/our-work"><span>Looking for inspiration?</span><strong>See our work ↗</strong></Link></section>
  </main><SiteFooter /></>;
}
