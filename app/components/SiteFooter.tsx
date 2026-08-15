import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Image src="/mist-logo.svg" alt="Mist Printing" width={220} height={161} />
        <p>Custom apparel, stickers, and decals from the Treasure Valley to anywhere in the country.</p>
      </div>
      <div>
        <p className="footer-heading">Explore</p>
        <Link href="/services">Services</Link>
        <Link href="/our-work">Our work</Link>
        <Link href="/about">About us</Link>
        <Link href="/service-area">Service area</Link>
      </div>
      <div>
        <p className="footer-heading">Start an order</p>
        <Link href="/contact">Get a quote</Link>
        <Link href="/privacy">Privacy policy</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mist Printing</span>
        <span>Boise area · Nationwide shipping</span>
      </div>
    </footer>
  );
}

