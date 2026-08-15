import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mist Printing | Custom DTF Apparel in Boise, Idaho",
  description: "Custom DTF apparel, stickers, and decals for businesses, teams, churches, reunions, and events. Local Treasure Valley service with nationwide shipping.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
