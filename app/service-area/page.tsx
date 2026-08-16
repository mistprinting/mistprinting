import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { QuoteCta } from "../components/QuoteCta";
import { QuoteLink } from "../components/QuoteLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { canonicalUrl, siteConfig } from "../site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Boise & Treasure Valley DTF Printing Service Area",
  description: "Mist Printing serves Boise, Meridian, Nampa, Caldwell, and Ontario locally and ships custom apparel, stickers, and decals nationwide.",
  alternates: { canonical: canonicalUrl("/service-area") },
};

export default function ServiceAreaPage() {
  const serviceData = { "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl("/service-area")}#service`, url: canonicalUrl("/service-area"), name: "Custom DTF apparel, sticker, and decal printing", provider: { "@type": "Organization", name: "Mist Printing", url: canonicalUrl() }, areaServed: [...siteConfig.serviceAreas, "United States"], serviceType: ["DTF apparel printing", "Custom sticker printing", "Custom decal printing", "Bulk event printing"] };
  return <><SiteHeader /><main>
    <PageHero title="Treasure Valley roots." accent="Nationwide reach." description="Local custom printing for the Boise region, plus nationwide shipping for organizations and events wherever they happen." />
    <section className="area-intro"><div><h2>Custom printing for Boise and beyond.</h2></div><p>Mist Printing works with businesses, teams, churches, reunions, and events across the Treasure Valley and nearby communities. If you are farther away, your completed order can ship anywhere in the United States.</p></section>
    <section className="city-grid">{siteConfig.serviceAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, "0")}</span><h2>{area}</h2><p>Custom DTF apparel, stickers, decals, and coordinated group orders.</p></article>)}</section>
    <section className="shipping-panel"><div><h2>Your print partner does not have to be down the street.</h2></div><div><p>Share the order details, approve the artwork, and let Mist Printing handle production. Completed orders can be prepared for shipment throughout the country.</p><QuoteLink className="text-link">Talk about delivery ↗</QuoteLink></div></section>
    <QuoteCta title="Local project or national order?" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
  </main><SiteFooter /></>;
}
