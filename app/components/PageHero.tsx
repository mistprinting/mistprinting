type PageHeroProps = {
  title: string;
  accent?: string;
  description: string;
};

export function PageHero({ title, accent, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <h1>{title}{accent ? <><br /><em>{accent}</em></> : null}</h1>
      <p className="lede">{description}</p>
    </section>
  );
}
