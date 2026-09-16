import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "bester IPTV Anbieter" (evergreen quality-criteria comparison).
// Must NOT compete with "IPTV Anbieter Deutschland" (owned by /iptv-anbieter-deutschland,
// trust/scam-avoidance angle) or "beste IPTV Anbieter 2026" (owned by the blog
// pillar /blog/best-iptv-providers-2026, the dated, deepest comparison asset) —
// see docs/seo/keyword-architecture.md. This page stays evergreen and criteria-
// focused rather than a dated, exhaustive comparison.
export const metadata: Metadata = {
  title: "Bester IPTV Anbieter – Qualitätskriterien im Überblick",
  description:
    "Woran erkennt man den besten IPTV Anbieter? Serverstabilität, faire Preise, Support und Gerätekompatibilität — die Kriterien im Überblick, mit Checkliste.",
  keywords: [
    "bester IPTV Anbieter",
    "beste IPTV Anbieter Deutschland",
    "bester IPTV Anbieter Deutschland",
    "IPTV Anbieter Vergleich",
    "IPTV Qualitätsmerkmale",
  ],
  alternates: {
    canonical: "/best-iptv-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/best-iptv-service",
    title: "Bester IPTV Anbieter – Qualitätskriterien im Überblick | Deutschland IPTV",
    description: "Die wichtigsten Qualitätskriterien für IPTV — und wie Deutschland IPTV sie erfüllt.",
    images: [{ url: "https://deutschland-iptv.online/images/streaming-tipps.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/streaming-tipps.png"],
    title: "Bester IPTV Anbieter – Qualitätskriterien im Überblick | Deutschland IPTV",
    description: "Die wichtigsten Qualitätskriterien für IPTV — und wie Deutschland IPTV sie erfüllt.",
  },
};

const criteria = [
  {
    title: "Stabile Server & minimales Puffern",
    description:
      "Der beste IPTV Anbieter bleibt auch bei Live-Sport und hoher Auslastung stabil. Deutschland IPTV setzt auf leistungsstarke Infrastruktur für minimale Unterbrechungen.",
  },
  {
    title: "Transparente Preise, keine versteckten Kosten",
    description:
      "Klare Laufzeiten und feste Preise statt Kleingedrucktem. Jeder Deutschland IPTV Tarif ist vollständig auf unserer Seite IPTV Preise einsehbar.",
  },
  {
    title: "Große Sender- und Inhaltsvielfalt",
    description:
      "30.000+ Sender in HD, Full HD und 4K sowie eine umfangreiche VOD-Bibliothek — das ist unser Maßstab für einen Premium-Anbieter.",
  },
  {
    title: "Echter, erreichbarer Support",
    description:
      "Ein guter Anbieter lässt Sie mit einem Problem nicht allein. Unser Support-Team ist direkt über WhatsApp erreichbar.",
  },
  {
    title: "Breite Gerätekompatibilität",
    description:
      "Smart TV, Fire TV Stick, Android TV, iPhone oder PC — der beste IPTV Anbieter funktioniert dort, wo Sie ihn nutzen möchten.",
  },
  {
    title: "Die Möglichkeit, vorab zu testen",
    description:
      "Vertrauenswürdige Anbieter lassen Sie die Streaming-Qualität vorab prüfen, statt sofort eine langfristige Zahlung ohne Testmöglichkeit zu verlangen.",
  },
];

const faqItems = [
  {
    question: "Woran erkenne ich den besten IPTV Anbieter?",
    answer:
      "An einer Kombination aus stabilen Servern, transparenten Preisen, echtem Kundenservice, breiter Gerätekompatibilität und der Möglichkeit, den Service vorab zu testen — nicht allein am niedrigsten Preis.",
  },
  {
    question: "Lohnen sich besonders günstige IPTV Anbieter?",
    answer:
      "Nicht automatisch. Preise deutlich unter dem Marktdurchschnitt gehen oft zulasten der Serverkapazität, der Senderauswahl oder der Supportqualität.",
  },
  {
    question: "Wie wichtig ist 4K-Qualität bei der Anbieterwahl?",
    answer:
      "Echtes 4K-Streaming erfordert sowohl eine starke Serverinfrastruktur beim Anbieter als auch eine Internetgeschwindigkeit von mindestens 25 Mbit/s bei Ihnen.",
  },
  {
    question: "Lohnt sich ein längerfristiges IPTV Abo?",
    answer:
      "Ja, sofern der Anbieter Sie bereits in einem kurzen Test überzeugt hat. Bei ein- oder zweijährigen Tarifen liegt der Monatspreis meist deutlich unter dem eines Monatstarifs.",
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

export default function BestIptvServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Bester IPTV Anbieter", href: "/best-iptv-service" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Qualitätskriterien"
            title="Bester IPTV Anbieter: Was wirklich zählt"
            description="Ohne leere Marketingversprechen: Das sind die konkreten Kriterien, an denen sich der beste IPTV Anbieter erkennen lässt."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              „Der beste IPTV Anbieter“ bedeutet für jeden Nutzer etwas anderes — doch einige Faktoren
              entscheiden in fast jedem Vergleich über die tatsächliche Qualität. Diese Seite zeigt die
              Kriterien selbst, unabhängig von Jahr oder Einzelanbieter. Wer stattdessen mehrere
              konkrete Anbieter direkt gegenüberstellen möchte, findet das in unserem Artikel{" "}
              <Link href="/blog/best-iptv-providers-2026" className="text-aqua underline underline-offset-4">
                Beste IPTV Anbieter 2026
              </Link>
              . Wenn Sie bereit sind, direkt zu bestellen, zeigt Ihnen unsere Seite{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV kaufen
              </Link>{" "}
              den Ablauf.
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-tipps.png"
                alt="Bester IPTV Anbieter erkennen: Qualitätsmerkmale eines Premium-Anbieters im Überblick"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {criteria.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6"
                >
                  <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Bester IPTV Anbieter: So vergleichen Sie richtig
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein strukturierter Vergleich zahlt sich immer mehr aus als eine Entscheidung allein
                nach dem Preis. Prüfen Sie Serverstabilität, Senderauswahl, Gerätekompatibilität und
                Reaktionszeit des Supports gemeinsam — nur so erhalten Sie ein realistisches Bild vom
                Gesamtpaket. Für Warnzeichen unseriöser Anbieter und eine Vertrauens-Checkliste lohnt
                sich zusätzlich ein Blick auf unsere Seite{" "}
                <Link href="/iptv-anbieter-deutschland" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>
                . Wie ein aussagekräftiger Test in der Praxis abläuft und worauf Sie dabei achten
                sollten, erfahren Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-test-guide" className="text-aqua underline underline-offset-4">
                  IPTV Test
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den passenden Tarif finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Vergleichen Sie unsere{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>{" "}
                und wählen Sie die Laufzeit, die zu Ihnen passt. Suchen Sie einen Anbieter für ein
                anderes europäisches Land, werfen Sie einen Blick auf unser{" "}
                <Link href="/europe-iptv" className="text-aqua underline underline-offset-4">
                  Europe IPTV
                </Link>{" "}
                Angebot.
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
