import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { siteConfig } from "./site-config";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: { default: "Mist Printing | Custom DTF Apparel in Boise", template: "%s | Mist Printing" },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: "Mist Printing | Custom Printing Built to Show Up",
      description: siteConfig.description,
      images: [{ url: "/og.png", alt: "Mist Printing — custom printing built to show up" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mist Printing | Custom Printing Built to Show Up",
      description: siteConfig.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
