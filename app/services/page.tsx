import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { QuoteCta } from "../components/QuoteCta";
import { QuoteLink } from "../components/QuoteLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { assetPath, canonicalUrl } from "../site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "DTF Apparel, Stickers & Decals",
  description: "Explore custom DTF apparel printing, stickers, decals, and coordinated bulk orders from Mist Printing in the Boise area.",
  alternates: { canonical: canonicalUrl("/services") },
};

const services = [
  { id: "dtf", number: "01", title: "DTF apparel", kicker: "Full color. Fine detail. Built to wear.", text: "Direct-to-film printing uses a printed transfer, heat, and pressure to apply detailed artwork to apparel. It is a strong fit for colorful graphics, fine lines, multiple garment colors, and coordinated orders without the traditional screen setup.", uses: ["Business and crew shirts", "Sporting event apparel", "Church and ministry shirts", "Family reunion shirts and sweatshirts"], image: "/work/gallery/usa-floral-shirt.webp", alt: "Detailed floral USA graphic printed on a shirt" },
  { id: "stickers", number: "02", title: "Stickers & decals", kicker: "Put your mark where people will see it.", text: "Turn logos, event art, and original graphics into colorful stickers and decals for packaging, giveaways, vehicles, equipment, windows, and more.", uses: ["Logo and brand stickers", "Event and fundraiser giveaways", "Vehicle and business decals", "Holographic and specialty looks"], image: "/work/gallery/holographic-ministry-stickers.webp", alt: "Rows of holographic custom ministry stickers" },
  { id: "bulk", number: "03", title: "Bulk & events", kicker: "One coordinated order. A whole group ready.", text: "Mist Printing supports substantial runs for organizations that need consistent artwork and a clear production process. Start with your approximate quantity, desired date, and order destination.", uses: ["Company and employee apparel", "Teams and sporting events", "Schools, clubs, and churches", "Reunions, fundraisers, and festivals"], image: "/work/gallery/teaching-ministry-shirts.webp", alt: "Three coordinated teaching ministry shirts" },
];

export default function ServicesPage() {
  return <><SiteHeader /><main>
    <PageHero title="The right print for" accent="the way you'll use it." description="Apparel, stickers, decals, and coordinated volume—made with the color and detail your idea deserves." />
    <section className="service-detail-list">
      {services.map((service) => <article className="service-detail" id={service.id} key={service.id}>
        <div className="service-detail-image"><Image src={assetPath(service.image)} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="service-detail-copy"><span className="big-number">{service.number}</span><h2>{service.title}</h2><p className="service-kicker">{service.kicker}</p><p>{service.text}</p><ul>{service.uses.map((use) => <li key={use}>{use}</li>)}</ul><QuoteLink className="text-link">Ask about this service ↗</QuoteLink></div>
      </article>)}
    </section>
    <section className="not-offered"><h2>Looking for embroidery?</h2><p>Not yet. Mist Printing currently specializes in DTF apparel printing, stickers, and decals—so we can stay focused on doing those exceptionally well.</p></section>
    <QuoteCta title="Have an order in mind?" />
  </main><SiteFooter /></>;
}
