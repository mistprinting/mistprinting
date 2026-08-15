import Image from "next/image";
import Link from "next/link";

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
        <Image src="/mist-logo.svg" alt="Mist Printing" width={166} height={122} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="button button-small header-cta" href="/contact">Get a quote</Link>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Get a quote</Link>
        </div>
      </details>
    </header>
  );
}

