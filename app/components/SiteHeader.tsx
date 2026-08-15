import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../site-config";
import { QuoteLink } from "./QuoteLink";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service area" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mist Printing home">
        <Image src={assetPath("/mist-logo.png")} alt="Mist Printing" width={1091} height={684} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <QuoteLink className="button button-small header-cta">Get a quote</QuoteLink>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <QuoteLink>Get a quote</QuoteLink>
        </div>
      </details>
    </header>
  );
}
