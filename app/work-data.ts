import { assetPath } from "./site-config";

const media = (path: string) => assetPath(path);

export const galleryImages = [
  { src: "/work/gallery/volleyball-event-shirts.webp", alt: "Custom volleyball event shirts with a colorful full-front print", caption: "Sporting event apparel", kind: "apparel" },
  { src: "/work/gallery/alpha-organization-shirt.webp", alt: "Custom organization shirt with a clean one-color chest print", caption: "Organization apparel", kind: "apparel" },
  { src: "/work/gallery/bold-event-shirt.webp", alt: "Dark custom event shirt with bold multicolor lettering", caption: "Event shirts", kind: "apparel" },
  { src: "/work/gallery/usa-floral-shirt.webp", alt: "White shirt with a detailed floral USA graphic", caption: "Detailed full-color apparel", kind: "apparel" },
  { src: "/work/gallery/usa-floral-print-detail.webp", alt: "Close-up of detailed floral lettering printed on apparel", caption: "Fine print detail", kind: "detail" },
  { src: "/work/gallery/floral-number-shirt.webp", alt: "Custom floral number print on a red shirt", caption: "Personalized number apparel", kind: "apparel" },
  { src: "/work/gallery/camp-apparel-and-stickers.webp", alt: "Coordinated camp shirts and printed stickers", caption: "Apparel and sticker sets", kind: "mixed" },
  { src: "/work/gallery/coffee-club-shirts.webp", alt: "Coordinated custom coffee club shirts", caption: "Group apparel", kind: "apparel" },
  { src: "/work/gallery/business-vehicle-decal.webp", alt: "Large custom business decal installed on a red vehicle", caption: "Business decals", kind: "stickers" },
  { src: "/work/gallery/custom-round-stickers.webp", alt: "Sheets of custom round logo stickers", caption: "Custom logo stickers", kind: "stickers" },
  { src: "/work/gallery/holographic-ministry-stickers.webp", alt: "Rows of holographic ministry stickers", caption: "Holographic stickers", kind: "stickers" },
  { src: "/work/gallery/senior-night-shirts.webp", alt: "Custom senior night football shirts", caption: "Senior night apparel", kind: "apparel" },
  { src: "/work/gallery/floral-heart-shirt.webp", alt: "Custom shirt with a colorful floral heart graphic", caption: "Full-color apparel", kind: "apparel" },
  { src: "/work/gallery/coffee-logo-shirt.webp", alt: "Custom shirt with a circular coffee logo", caption: "Branded apparel", kind: "apparel" },
  { src: "/work/gallery/teaching-ministry-shirts.webp", alt: "Three teaching ministry shirts in coordinated colors", caption: "Church and ministry apparel", kind: "apparel" },
].map((item) => ({ ...item, src: media(item.src) }));

export const processVideos = [
  { src: "/work/videos/print-process-01.mp4", poster: "/work/gallery/usa-floral-print-detail.webp", label: "Print process close-up" },
  { src: "/work/videos/print-process-02.mp4", poster: "/work/gallery/senior-night-shirts.webp", label: "Custom apparel in production" },
  { src: "/work/videos/print-process-03.mp4", poster: "/work/gallery/teaching-ministry-shirts.webp", label: "Finished apparel process" },
  { src: "/work/videos/print-process-04.mp4", poster: "/work/gallery/volleyball-event-shirts.webp", label: "Event apparel production" },
  { src: "/work/videos/print-process-05.mp4", poster: "/work/gallery/coffee-club-shirts.webp", label: "Group order production" },
  { src: "/work/videos/print-process-06.mp4", poster: "/work/gallery/floral-heart-shirt.webp", label: "Full-color print process" },
  { src: "/work/videos/sticker-printing-process.mp4", poster: "/work/gallery/holographic-ministry-stickers.webp", label: "Sticker printing process" },
].map((video) => ({
  ...video,
  src: media(video.src),
  poster: media(video.poster),
}));

