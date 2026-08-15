type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
};

export function PageHero({ eyebrow, title, accent, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h1>{title}{accent ? <><br /><em>{accent}</em></> : null}</h1>
      <p className="lede">{description}</p>
    </section>
  );
}

