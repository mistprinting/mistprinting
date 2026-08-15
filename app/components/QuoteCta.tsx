import { QuoteLink } from "./QuoteLink";

type QuoteCtaProps = {
  eyebrow?: string;
  title?: string;
};

export function QuoteCta({ eyebrow = "Ready when you are", title = "Tell us what you're printing." }: QuoteCtaProps) {
  return (
    <section className="quote-banner">
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      <QuoteLink className="button button-light">Get a fast quote <span aria-hidden="true">↗</span></QuoteLink>
    </section>
  );
}
