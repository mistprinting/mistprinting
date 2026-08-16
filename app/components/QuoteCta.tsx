import { QuoteLink } from "./QuoteLink";

type QuoteCtaProps = {
  title?: string;
};

export function QuoteCta({ title = "Tell us what you're printing." }: QuoteCtaProps) {
  return (
    <section className="quote-banner">
      <h2>{title}</h2>
      <QuoteLink className="button button-light">Get a fast quote <span aria-hidden="true">↗</span></QuoteLink>
    </section>
  );
}
