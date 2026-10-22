import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { SITE_URL as siteUrl } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPTV Deutschland – Fernsehen über das Internet",
    template: "%s | Deutschland IPTV",
  },
  description:
    "IPTV Deutschland: Live-TV, Filme und Serien über Ihre Internetleitung auf Smart TV, Stick oder Smartphone. Bestellung und Hilfe per WhatsApp.",
  // No `alternates` here: a root-level canonical would be inherited by every page
  // that forgets its own. Each page sets its canonical explicitly.
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Deutschland IPTV",
    title: "IPTV Deutschland – Fernsehen über das Internet",
    description: "Live-TV, Filme und Serien über die Internetleitung, auf den Geräten, die Sie schon haben.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Deutschland – Fernsehen über das Internet",
    description: "Live-TV, Filme und Serien über die Internetleitung, auf den Geräten, die Sie schon haben.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Sitewide entity graph, emitted once on every page (not per-route) so Google and
// AI crawlers see exactly one canonical Organization/WebSite identity for the brand
// instead of a duplicate, page-specific copy on each route.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Deutschland IPTV",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
    width: 500,
    height: 500,
  },
  description:
    "IPTV Deutschland: Fernsehen, Filme und Serien über die Internetleitung.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "deutschland.iptv.support@gmail.com",
    contactType: "customer support",
    areaServed: "DE",
    availableLanguage: ["German"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Deutschland IPTV",
  url: siteUrl,
  inLanguage: "de-DE",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-aqua focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
