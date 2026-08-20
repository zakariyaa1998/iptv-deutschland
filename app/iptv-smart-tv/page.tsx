import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV Smart TV" (commercial: device compatibility + setup
// overview). Must NOT compete with "IPTV auf Smart TV nutzen" (owned by the
// deep how-to guide /blog/iptv-smart-tv-guide) — see docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV Smart TV – Samsung & LG einrichten",
  description:
    "IPTV Smart TV nutzen, ganz ohne Zusatzgerät: So richten Sie Deutschland IPTV auf Samsung- und LG-Fernsehern ein und streamen in Full HD und 4K.",
  keywords: [
    "IPTV Smart TV",
    "IPTV für Smart TV",
    "IPTV Samsung TV",
    "IPTV LG TV",
    "IPTV Smart TV einrichten",
  ],
  alternates: {
    canonical: "/iptv-smart-tv",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-smart-tv",
    title: "IPTV Smart TV – Samsung & LG einrichten | Deutschland IPTV",
    description: "Deutschland IPTV auf Samsung- und LG-Smart-TVs nutzen — Kompatibilität und Einrichtung auf einen Blick.",
    images: [{ url: "https://deutschland-iptv.online/images/dashbord.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/dashbord.png"],
    title: "IPTV Smart TV – Samsung & LG einrichten | Deutschland IPTV",
    description: "Deutschland IPTV auf Samsung- und LG-Smart-TVs nutzen — Kompatibilität und Einrichtung auf einen Blick.",
  },
};

const faqItems = [
  {
    question: "Kann ich IPTV Smart TV ohne Zusatzgerät nutzen?",
    answer:
      "Ja, sofern Ihr Smart TV einen eigenen App Store besitzt — auf Samsung (Tizen) und LG (webOS) lässt sich eine kompatible IPTV App direkt installieren, ganz ohne Fire TV Stick oder externe Box.",
  },
  {
    question: "Welche Internetverbindung wird für IPTV auf dem Smart TV empfohlen?",
    answer:
      "Für ein stabiles Streaming-Erlebnis empfehlen wir eine LAN-Kabelverbindung statt WLAN, mit mindestens 10 Mbit/s für HD und idealerweise 25 Mbit/s oder mehr für 4K-Inhalte.",
  },
  {
    question: "Was tue ich, wenn meine IPTV App nicht im Smart-TV-Store verfügbar ist?",
    answer:
      "In diesem Fall empfehlen wir den Umstieg auf einen Fire TV Stick oder eine Android-TV-Box, die eine deutlich größere App-Auswahl bieten und sich einfach an den Fernseher anschließen lassen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IptvSmartTvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Smart TV", href: "/iptv-smart-tv" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Smart TV"
            title="IPTV Smart TV: Einrichtung für Samsung & LG"
            description="Moderne Smart TVs sind ideal für IPTV — ganz ohne zusätzliche Hardware. So läuft Deutschland IPTV auf Ihrem Fernseher."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Samsung- und LG-Fernseher verfügen über eigene App-Systeme — Tizen beziehungsweise
              webOS —, über die sich eine IPTV Smart TV App direkt installieren lässt, ganz ohne Fire
              TV Stick oder externe Box. Die genauen Schritte unterscheiden sich je nach Hersteller
              leicht. Eine allgemeine Einführung zu IPTV finden Sie in unserem Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/dashbord.png"
                alt="IPTV Smart TV einrichten: Senderübersicht auf einem Samsung-Fernseher"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Nach Hersteller</h2>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">Samsung Smart TV (Tizen)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Laden Sie eine kompatible IPTV App direkt aus dem integrierten Samsung App Store
                  herunter. Geben Sie anschließend die von Deutschland IPTV bereitgestellten
                  Zugangsdaten oder die Playlist-URL ein — die Senderliste lädt automatisch.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">LG Smart TV (webOS)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Bei webOS-Geräten funktioniert die Einrichtung nach demselben Prinzip über den LG
                  Content Store. Die App-Verfügbarkeit kann je nach Modelljahr variieren — unser
                  Support-Team empfiehlt Ihnen nach Ihrer Bestellung die passende Option für Ihr
                  Gerät.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Für die beste Bildqualität auf dem Smart TV
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Für ein stabiles Streaming-Erlebnis empfehlen wir eine LAN-Kabelverbindung statt WLAN
                sowie das Deaktivieren unnötiger Bildverarbeitungsfunktionen in den TV-Einstellungen.
                Eine ausführliche Schritt-für-Schritt-Anleitung mit weiteren Optimierungstipps finden
                Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-smart-tv-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf dem Smart TV nutzen
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den richtigen Anbieter für Ihren Smart TV finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder IPTV Service läuft auf jedem Fernsehermodell gleich gut. Worauf Sie bei
                einem Anbieter generell achten sollten, erfahren Sie unter{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>{" "}
                und in unserem Vergleich{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Kein Smart TV zur Hand?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Deutschland IPTV läuft genauso zuverlässig auf einem{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  IPTV Fire TV Stick
                </Link>{" "}
                oder einer{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  IPTV Android TV
                </Link>{" "}
                Box. Den passenden Tarif zum Einstieg finden Sie auf unserer Seite{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen</h2>
              <div className="flex flex-col gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
