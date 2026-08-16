import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { QuoteCta } from "../components/QuoteCta";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { assetPath, canonicalUrl } from "../site-config";
import { galleryImages, processVideos } from "../work-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Apparel, Sticker & Decal Gallery",
  description: "See real custom apparel, stickers, decals, group orders, and print-process work produced by Mist Printing.",
  alternates: { canonical: canonicalUrl("/our-work") },
};

export default function WorkPage() {
  return <><SiteHeader /><main>
    <PageHero title="Real projects." accent="Real print impact." description="Apparel, stickers, decals, and coordinated orders made by Mist Printing for organizations, events, and communities." />
    <section className="gallery-section">
      <div className="gallery-heading"><p>Every piece shown here comes from the Mist Printing project archive.</p></div>
      <div className="gallery-grid">{galleryImages.map((item, index) => <figure className={index % 7 === 0 ? "gallery-wide" : ""} key={item.src}><div><Image src={item.src} alt={item.alt} fill sizes={index % 7 === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 33vw"} /></div><figcaption><span>{item.caption}</span><small>{item.kind === "stickers" ? "Stickers & decals" : item.kind === "detail" ? "Print detail" : "Custom apparel"}</small></figcaption></figure>)}</div>
    </section>
    <section className="video-section"><div className="section-heading"><h2>See the process move.</h2></div><div className="video-grid">{processVideos.map((video) => <figure key={video.src}><video controls playsInline preload="none" poster={video.poster} aria-label={video.label}><source src={video.src} type="video/mp4" /><track kind="captions" src={assetPath("/work/videos/process-captions.vtt")} srcLang="en" label="English" default /></video><figcaption>{video.label}</figcaption></figure>)}</div></section>
    <QuoteCta title="Want your project featured next?" />
  </main><SiteFooter /></>;
}
