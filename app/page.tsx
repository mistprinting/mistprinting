import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "./components/QuoteCta";
import { QuoteLink } from "./components/QuoteLink";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { absoluteAssetUrl, assetPath, canonicalUrl } from "./site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom DTF Printing in Boise",
  description: "Custom DTF apparel, stickers, and decals for Boise-area businesses, sports, churches, reunions, and events, with nationwide shipping.",
  alternates: { canonical: canonicalUrl() },
};

const services = [
  { number: "01", title: "DTF apparel", text: "Bright, detailed custom printing for shirts, sweatshirts, workwear, team gear, and event apparel.", href: "/services#dtf" },
  { number: "02", title: "Stickers & decals", text: "Full-color stickers and durable decals for brands, vehicles, events, packaging, and giveaways.", href: "/services#stickers" },
  { number: "03", title: "Bulk & events", text: "Coordinated production for businesses, sporting events, churches, schools, and family reunions.", href: "/services#bulk" },
];

const audiences = ["Businesses & crews", "Teams & sporting events", "Churches & ministries", "Family reunions", "Schools & clubs", "Fundraisers & community events"];

const faqs = [
  ["What is DTF printing?", "Direct-to-film printing uses a printed transfer, heat, and pressure to apply detailed full-color artwork to apparel. It is a versatile choice for colorful graphics and many garment colors."],
  ["Can Mist Printing handle large orders?", "Yes. Mist Printing is equipped for coordinated bulk and event orders. Share your approximate quantity and deadline in your quote request so the scope can be confirmed."],
  ["Do you ship outside Idaho?", "Yes. Mist Printing serves the Boise and Treasure Valley area locally and ships completed orders nationwide."],
  ["Do you offer embroidery?", "Not yet. Mist Printing currently specializes in DTF apparel printing, stickers, and decals."],
  ["What should I send for a quote?", "Include what you want printed, an approximate quantity, your desired date, and your artwork if it is ready. If your idea is still rough, describe it as clearly as you can."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl()}#organization`,
        name: "Mist Printing",
        logo: absoluteAssetUrl("/mist-logo.png"),
        description: "Custom DTF apparel, sticker, and decal printing serving the Treasure Valley and customers nationwide.",
        areaServed: ["Boise, Idaho", "Meridian, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Ontario, Oregon", "United States"],
        makesOffer: ["DTF apparel printing", "Custom stickers", "Custom decals", "Bulk event printing"],
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl()}#website`,
        url: canonicalUrl(),
        name: "Mist Printing",
        publisher: { "@id": `${canonicalUrl()}#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <h1>Custom printing<br />built to <em>show up.</em></h1>
            <p className="lede">Bold DTF apparel, stickers, and decals for businesses, teams, churches, reunions, and events. Made locally for the Treasure Valley. Shipped anywhere.</p>
            <div className="hero-actions">
              <QuoteLink className="button">Start your quote <span aria-hidden="true">↗</span></QuoteLink>
              <Link className="text-link" href="/our-work">See recent work <span aria-hidden="true">↓</span></Link>
            </div>
            <ul className="service-pills" aria-label="Core services">
              <li>DTF apparel</li><li>Stickers & decals</li><li>Bulk orders</li>
            </ul>
          </div>
          <div className="hero-art" aria-label="Examples of custom printing by Mist Printing">
            <div className="color-stripe" />
            <figure className="hero-photo hero-photo-main">
              <Image src={assetPath("/work/gallery/teaching-ministry-shirts.webp")} alt="Three custom teaching ministry shirts" fill sizes="(max-width: 800px) 94vw, 48vw" priority />
            </figure>
            <figure className="hero-photo hero-photo-small">
              <Image src={assetPath("/work/gallery/volleyball-event-shirts.webp")} alt="Colorful custom volleyball event shirt" fill sizes="230px" />
            </figure>
            <div className="quality-stamp"><strong>Full color</strong><span>Built to last</span></div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Mist Printing benefits">
          <span>Local service</span><i /><span>High-volume capable</span><i /><span>Nationwide shipping</span><i /><span>Real people, clear process</span>
        </section>

        <section className="section light-section" id="services">
          <div className="section-heading split-heading">
            <div><h2>Your idea.<br /><span>Printed with impact.</span></h2></div>
            <p>Clear options, bold color, and a straightforward path from artwork to finished order.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href={service.href} key={service.title}>
                <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><b>Explore service ↗</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="work-showcase">
          <div className="work-title"><h2>Details you can see.<br /><span>Quality you can feel.</span></h2></div>
          <div className="work-mosaic">
            <figure className="mosaic-tall"><Image src={assetPath("/work/gallery/usa-floral-shirt.webp")} alt="Detailed floral USA apparel print" fill sizes="(max-width: 800px) 100vw, 40vw" /></figure>
            <figure><Image src={assetPath("/work/gallery/holographic-ministry-stickers.webp")} alt="Rows of holographic custom stickers" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
            <figure><Image src={assetPath("/work/gallery/business-vehicle-decal.webp")} alt="Custom business vehicle decal" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
          </div>
          <div className="work-footer"><p>Real projects, printed locally—from one coordinated idea to large runs ready for an entire group.</p><Link className="text-link" href="/our-work">Explore all work <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section audience-section">
          <div className="audience-layout">
            <h2>Outfit the whole crew.<br /><span>Without the chaos.</span></h2>
            <div className="audience-list">{audiences.map((audience, index) => <div key={audience}><span>{String(index + 1).padStart(2, "0")}</span>{audience}</div>)}</div>
          </div>
        </section>

        <section className="bulk-section">
          <div className="bulk-photo"><Image src={assetPath("/work/gallery/coffee-club-shirts.webp")} alt="Coordinated custom shirts for a group order" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="bulk-copy"><h2>Big order?<br /><span>Bring it on.</span></h2><p>Businesses, teams, ministries, reunions, and event organizers need more than a good print—they need a clear process. We help keep artwork, quantities, and production moving together.</p><QuoteLink className="button">Talk about your order <span>↗</span></QuoteLink></div>
        </section>

        <section className="section process-section">
          <div className="section-heading"><h2>From idea to finished.</h2></div>
          <ol className="process-grid">
            <li><span>01</span><h3>Share the idea</h3><p>Tell us what you need, your quantity, timing, and where it is going.</p></li>
            <li><span>02</span><h3>Confirm details</h3><p>We align on the product, artwork, and the requirements of your order.</p></li>
            <li><span>03</span><h3>Approve artwork</h3><p>Review the direction before the order moves into production.</p></li>
            <li><span>04</span><h3>Print & deliver</h3><p>Your completed order is prepared for local service or nationwide shipping.</p></li>
          </ol>
        </section>

        <section className="service-area-teaser">
          <div><h2>Treasure Valley roots.<br /><span>Nationwide reach.</span></h2></div>
          <div><p>Serving Boise, Meridian, Nampa, Caldwell, and Ontario locally—with finished orders shipping across the United States.</p><Link className="text-link" href="/service-area">See our service area <span>↗</span></Link></div>
        </section>

        <section className="section faq-section">
          <div className="faq-intro"><h2>Questions,<br />answered.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <QuoteCta />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </main>
      <SiteFooter />
    </>
  );
}
