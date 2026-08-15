import type { Metadata } from "next";
import "./globals.css";
import { absoluteAssetUrl, assetPath, siteConfig } from "./site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { default: "Mist Printing | Custom DTF Apparel in Boise", template: "%s | Mist Printing" },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    icons: { icon: assetPath("/favicon.png"), shortcut: assetPath("/favicon.png"), apple: assetPath("/favicon.png") },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: "Mist Printing | Custom Printing Built to Show Up",
      description: siteConfig.description,
      images: [{ url: absoluteAssetUrl("/og.png"), alt: "Mist Printing — custom printing built to show up" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mist Printing | Custom Printing Built to Show Up",
      description: siteConfig.description,
      images: [absoluteAssetUrl("/og.png")],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

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
