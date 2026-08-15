import Link from "next/link";

export function QuoteCta({ eyebrow = "Ready when you are", title = "Tell us what you're printing." }) {
  return (
    <section className="quote-banner">
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      <Link className="button button-light" href="/contact">Get a fast quote <span aria-hidden="true">↗</span></Link>
    </section>
  );
}

