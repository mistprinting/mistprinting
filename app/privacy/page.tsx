import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { canonicalUrl } from "../site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mist Printing handles information submitted through this website and its linked quote form.",
  alternates: { canonical: canonicalUrl("/privacy") },
};

export default function PrivacyPage() {
  return <><SiteHeader /><main>
    <PageHero title="Clear information." accent="No surprises." description="This policy explains what information may be collected when you visit the Mist Printing website or submit a quote request." />
    <article className="policy-content">
      <p className="policy-date">Effective August 15, 2026</p>
      <h2>Information you choose to provide</h2><p>When you use the quote form, you may choose to provide your name, contact information, project details, quantities, dates, delivery information, and artwork. Mist Printing uses this information to review your request, communicate with you, prepare a quote, and coordinate an order.</p>
      <h2>Quote form provider</h2><p>The quote experience links to a form hosted by Notion. Information submitted through that form is processed by Notion as a third-party service provider and may also be subject to Notion&apos;s privacy practices.</p>
      <h2>Website and server information</h2><p>Like most websites, the hosting service may process basic technical information such as IP address, browser type, requested pages, and timestamps for security, reliability, and ordinary server logging.</p>
      <h2>Images and video</h2><p>This site displays project images and locally hosted video. Playing video may cause your browser to request the media from the site&apos;s hosting provider.</p>
      <h2>Cookies and advertising</h2><p>Mist Printing does not currently use advertising trackers or payment processing on this website. If analytics, advertising, payments, or additional third-party tools are added later, this policy will be updated to describe them.</p>
      <h2>Sharing information</h2><p>Information may be shared with service providers only as reasonably needed to operate the website, process a quote request, produce an order, or arrange delivery. Mist Printing does not claim to sell personal information through this website.</p>
      <h2>Policy updates</h2><p>This policy may change when website features or business practices change. The effective date above will be revised when material updates are published.</p>
      <h2>Contact</h2><p>A dedicated privacy contact email has not yet been provided. Until one is published, use the linked quote form and note that your message concerns privacy.</p>
      <p className="policy-note">This page is a practical description of the website&apos;s current data practices and is not legal advice.</p>
    </article>
  </main><SiteFooter /></>;
}
