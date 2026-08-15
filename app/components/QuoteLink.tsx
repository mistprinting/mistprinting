import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "../site-config";

type QuoteLinkProps = {
  children: ReactNode;
  className?: string;
};

export function QuoteLink({ children, className }: QuoteLinkProps) {
  if (!siteConfig.notionQuoteUrl) {
    return <Link className={className} href="/contact">{children}</Link>;
  }

  return (
    <a
      className={className}
      href={siteConfig.notionQuoteUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
