import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { QuoteCta } from "../components/QuoteCta";
import { QuoteLink } from "../components/QuoteLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { assetPath, canonicalUrl } from "../site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Our Boise-Area Print Shop",
  description: "Meet Mist Printing, a Boise-area custom DTF apparel, sticker, and decal shop serving the Treasure Valley and shipping nationwide.",
  alternates: { canonical: canonicalUrl("/about") },
};

export default function AboutPage() {
  return <><SiteHeader /><main>
    <PageHero title="Local attention." accent="Production-minded." description="Mist Printing combines the care of a local Treasure Valley shop with the capability to coordinate substantial orders and ship across the country." />
    <section className="about-story">
      <div className="about-image"><Image src={assetPath("/work/gallery/floral-heart-shirt.webp")} alt="Custom floral heart apparel print by Mist Printing" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div><h2>Your project should feel exciting—not complicated.</h2><p>Printing often comes with too many choices, unclear steps, and crowded ordering experiences. Mist Printing is built around a simpler idea: understand the job, keep the details moving, and deliver work people are proud to wear or share.</p><p>From business apparel and sporting events to church groups and family reunions, each order is an opportunity to help a group show up together.</p></div>
    </section>
    <section className="values-grid"><article><span>01</span><h3>Bold, faithful color</h3><p>Detailed full-color artwork is the heart of what Mist makes.</p></article><article><span>02</span><h3>Clear coordination</h3><p>Organized communication matters as much as the finished print.</p></article><article><span>03</span><h3>Room to scale</h3><p>From focused group needs to substantial coordinated runs.</p></article><article><span>04</span><h3>Local and national</h3><p>Treasure Valley service with finished orders shipping nationwide.</p></article></section>
    <section className="two-link-panel"><div><h2>Let the work speak.</h2><Link className="button" href="/our-work">Explore our work ↗</Link></div><div><h2>Bring us your idea.</h2><QuoteLink className="button">Get a quote ↗</QuoteLink></div></section>
    <QuoteCta />
  </main><SiteFooter /></>;
}
