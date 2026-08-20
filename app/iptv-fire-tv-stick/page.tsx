import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV Fire TV Stick" (commercial: device compatibility +
// setup overview). Must NOT compete with "IPTV Fire TV Stick installieren"
// (owned by the deep how-to guide /blog/iptv-fire-tv-stick-setup-guide) or
// "beste IPTV Geräte 2026" (owned by the cross-device comparison
// /blog/best-iptv-devices-2026) — see docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV Fire TV Stick – Kompatibilität & Setup",
  description:
    "IPTV Fire TV Stick nutzen: Kompatibilität, App-Auswahl und Einrichtung im Überblick — Deutschland IPTV in wenigen Minuten startklar, auf jedem Fire-TV-Modell.",
  keywords: [
    "IPTV Fire TV Stick",
    "IPTV Firestick",
    "IPTV für Fire TV Stick",
    "IPTV App Fire TV Stick",
  ],
  alternates: {
    canonical: "/iptv-fire-tv-stick",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-fire-tv-stick",
    title: "IPTV Fire TV Stick – Kompatibilität & Setup | Deutschland IPTV",
    description: "Wie Deutschland IPTV auf dem Amazon Fire TV Stick läuft — vom Anschließen bis zur ersten Wiedergabe.",
    images: [{ url: "https://deutschland-iptv.online/images/fire-tv-stick.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/fire-tv-stick.png"],
    title: "IPTV Fire TV Stick – Kompatibilität & Setup | Deutschland IPTV",
    description: "Wie Deutschland IPTV auf dem Amazon Fire TV Stick läuft — vom Anschließen bis zur ersten Wiedergabe.",
  },
};

const faqItems = [
  {
    question: "Welcher Fire TV Stick eignet sich am besten für IPTV?",
    answer:
      "Für HD- und Full-HD-Sender reicht der Standard Fire TV Stick aus. Für 4K-Inhalte und flüssigere Wiedergabe empfehlen wir den Fire TV Stick 4K oder 4K Max.",
  },
  {
    question: "Welche IPTV App funktioniert am besten auf dem Fire TV Stick?",
    answer:
      "IPTV Smarters Pro eignet sich hervorragend für Einsteiger, während TiviMate mit umfangreicheren Anpassungsoptionen punktet. Beide Apps unterstützen die gängigen Zugangsformate.",
  },
  {
    question: "Wie installiere ich eine IPTV App, die nicht im Amazon App Store gelistet ist?",
    answer:
      "Installieren Sie die kostenlose „Downloader“-App aus dem Amazon App Store, aktivieren Sie „Apps aus unbekannten Quellen“ in den Entwickleroptionen und laden Sie die gewünschte App über ihre offizielle Download-URL herunter.",
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

export default function IptvFireTvStickPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "IPTV Fire TV Stick", href: "/iptv-fire-tv-stick" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Fire TV Stick"
            title="IPTV Fire TV Stick: Einrichtung & Kompatibilität"
            description="Der Fire TV Stick ist einer der beliebtesten IPTV Player überhaupt — günstig, kompakt und in wenigen Minuten startklar."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Der Amazon Fire TV Stick wird einfach in den HDMI-Anschluss Ihres Fernsehers gesteckt
              und macht daraus im Handumdrehen ein Smart-TV-Erlebnis. Mit einer großen App-Auswahl
              über den Amazon App Store sowie Sideloading-Tools läuft IPTV auf dem Fire TV Stick
              zuverlässig und ohne Umstände. Eine allgemeine Einführung zu IPTV finden Sie in unserem
              Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/fire-tv-stick.png"
                alt="IPTV Fire TV Stick am HDMI-Anschluss eines Fernsehers"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum der Fire TV Stick für IPTV so beliebt ist
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Plug and Play: einfach in den HDMI-Anschluss stecken, keine Installation nötig.</li>
                <li>Eine große Auswahl an IPTV Apps über den App Store oder eine Downloader-App.</li>
                <li>Fernbedienung mit Alexa-Sprachsteuerung für einfache Navigation durch EPG und Sender.</li>
                <li>Erhältlich in mehreren Leistungsstufen — von HD bis 4K Max.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Fire TV Stick: Einrichtung in Kürze
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach dem Anschließen installieren Sie eine kompatible IPTV App über den integrierten
                App Store oder eine Downloader-App, geben Ihre Deutschland IPTV Zugangsdaten oder
                Playlist-URL ein — und schon kann es losgehen. Die vollständige
                Schritt-für-Schritt-Anleitung mit App-Vergleich und Lösungen für häufige Probleme
                finden Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-fire-tv-stick-setup-guide" className="text-aqua underline underline-offset-4">
                  IPTV Fire TV Stick installieren
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welche Version ist die richtige für Sie?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Für Full-HD-Sender reicht der Standard Fire TV Stick meist aus. Für 4K-Inhalte und
                flüssigere Wiedergabe empfehlen wir den Fire TV Stick 4K oder 4K Max. Einen Vergleich
                mit Apple TV und Android-Boxen finden Sie in{" "}
                <Link
                  href="/blog/best-iptv-devices-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Die besten Geräte für IPTV
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den richtigen IPTV Anbieter für den Fire TV Stick finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder IPTV Service läuft gleich stabil auf dem Fire TV Stick. Worauf Sie bei
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
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Nicht das Richtige für Sie?</h2>
              <p className="text-base leading-relaxed text-muted">
                Deutschland IPTV funktioniert genauso gut auf einem{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  IPTV Smart TV
                </Link>{" "}
                oder einer{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  IPTV Android TV
                </Link>{" "}
                Box. Alle Tarife finden Sie auf unserer Seite{" "}
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
