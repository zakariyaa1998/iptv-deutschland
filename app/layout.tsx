import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://deutschland-iptv.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deutschland IPTV – IPTV Anbieter für Deutschland",
    template: "%s | Deutschland IPTV",
  },
  description:
    "Deutschland IPTV ist Ihr IPTV Anbieter für Deutschland: Tausende Sender, Filme und Serien in HD, Full HD und 4K – auf jedem Gerät, mit stabilen Servern und persönlichem Support.",
  // Kept deliberately narrow to the homepage's own primary/secondary keywords
  // (see docs/seo/keyword-architecture.md, updated 2026-08). "bester IPTV
  // Anbieter" and "IPTV Sender" stay excluded — those remain another page's
  // assigned primary keyword (/best-iptv-service and /blog/iptv-channels-guide).
  // "IPTV kaufen" and "IPTV Deutschland kaufen" were reintroduced as homepage
  // secondary keywords: the page that now owns "IPTV kaufen" as PRIMARY is the
  // landing page /iptv-service, not a blog post, so listing it here as a
  // secondary term is no longer self-inflicted cannibalization.
  keywords: [
    "IPTV Deutschland",
    "IPTV kaufen",
    "IPTV Anbieter",
    "IPTV Deutschland kaufen",
    "IPTV Anbieter Deutschland",
    "IPTV Abo",
    "IPTV Streaming",
    "IPTV Live TV",
    "IPTV Service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Deutschland IPTV",
    title: "Deutschland IPTV – IPTV Anbieter für Deutschland",
    description:
      "Tausende Sender, Filme und Serien in HD, Full HD und 4K. Stabile Server, faire Preise, persönlicher Support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutschland IPTV – IPTV Anbieter für Deutschland",
    description:
      "Tausende Sender, Filme und Serien in HD, Full HD und 4K. Stabile Server, faire Preise, persönlicher Support.",
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
    url: `${siteUrl}/logo`,
    width: 512,
    height: 512,
  },
  description:
    "IPTV Anbieter aus Deutschland mit Tausenden Sendern, Filmen und Serien in HD, Full HD und 4K.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "zerotv.support@gmail.com",
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
