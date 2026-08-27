import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV Anbieter Deutschland" (trust validation / commercial
// investigation — sole owner of the bare "IPTV Anbieter" head term). Must NOT
// compete with "bester IPTV Anbieter" (owned by /best-iptv-service, quality
// criteria) or "beste IPTV Anbieter 2026" (owned by the blog pillar
// /blog/best-iptv-providers-2026) — see docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV Anbieter Deutschland – Seriöse Anbieter erkennen",
  description:
    "So erkennen Sie einen seriösen IPTV Anbieter in Deutschland: Warnzeichen, Vertrauenssignale und eine Checkliste für Qualität, Support und faire Preise.",
  keywords: [
    "IPTV Anbieter Deutschland",
    "IPTV Anbieter",
    "IPTV Anbieter Vergleich",
    "seriöser IPTV Anbieter",
    "IPTV Bewertungen",
    "vertrauenswürdiger IPTV Anbieter",
  ],
  alternates: {
    canonical: "/iptv-providers",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-providers",
    title: "IPTV Anbieter Deutschland – Seriöse Anbieter erkennen | Deutschland IPTV",
    description: "Erkennen Sie die Warnzeichen unseriöser Anbieter und finden Sie einen vertrauenswürdigen IPTV Service.",
    images: [{ url: "https://deutschland-iptv.online/images/streaming-app.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/streaming-app.png"],
    title: "IPTV Anbieter Deutschland – Seriöse Anbieter erkennen | Deutschland IPTV",
    description: "Erkennen Sie die Warnzeichen unseriöser Anbieter und finden Sie einen vertrauenswürdigen IPTV Service.",
  },
};

const warningSigns = [
  "Keine Möglichkeit, den Anbieter vor dem Kauf zu erreichen — nur ein anonymes Bestellformular.",
  "Unklare oder stark widersprüchliche Preise ohne klare Tarifstruktur.",
  "Keine Angaben zu Senderanzahl, Qualität oder unterstützten Geräten.",
  "Keine Antwort auf Support-Anfragen nach der Zahlung.",
  "Auffällig viele, aber austauschbare Fünf-Sterne-Bewertungen ohne konkrete Details.",
];

const trustSignals = [
  "Direkter, persönlicher Kontakt über WhatsApp oder E-Mail — schon vor dem Kauf.",
  "Transparente Tarife mit klar angegebener Laufzeit und festem Preis.",
  "Klare Informationen zu Sendern, Qualität (HD/Full HD/4K) und unterstützten Geräten.",
  "Schnelle Aktivierung und erreichbarer Support auch nach dem Kauf.",
];

const checklistQuestions = [
  "Wie schnell antwortet der Support auf eine erste Anfrage?",
  "Sind Laufzeit, Preis und Senderauswahl klar kommuniziert?",
  "Funktioniert der Service auf meinem Gerät (Smart TV, Fire TV Stick, Android TV, Smartphone)?",
  "Gibt es einen erreichbaren Kontakt für technische Probleme?",
  "Ist ein Test vor einer langfristigen Bindung möglich?",
];

const faqItems = [
  {
    question: "Wie finde ich einen vertrauenswürdigen IPTV Anbieter in Deutschland?",
    answer:
      "Achten Sie auf direkten, persönlichen Kontakt vor dem Kauf, transparente Preise ohne versteckte Kosten, klare Angaben zu Sendern und Geräten sowie erreichbaren Support nach der Zahlung.",
  },
  {
    question: "Welche Warnzeichen deuten auf einen unseriösen IPTV Anbieter hin?",
    answer:
      "Keine Kontaktmöglichkeit vor dem Kauf, eine unklare Preisstruktur, fehlende Informationen zu Inhalten oder Geräten sowie Preise deutlich unter dem Marktdurchschnitt sind typische Warnsignale.",
  },
  {
    question: "Sollte ich einen IPTV Anbieter vor dem Kauf testen?",
    answer:
      "Ja, ein kurzer Test vor der langfristigen Bindung wird dringend empfohlen, damit Sie Streaming-Qualität, Senderauswahl und Reaktionszeit des Supports vorab einschätzen können.",
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

export default function IptvProvidersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Anbieter", href: "/iptv-providers" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anbieterwahl"
            title="IPTV Anbieter Deutschland: Seriöse Anbieter erkennen"
            description="Der Markt ist groß — diese Warnzeichen und Vertrauenssignale helfen Ihnen, seriöse IPTV Anbieter von unseriösen zu unterscheiden."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              IPTV Anbieter gibt es in Deutschland zuhauf, und die Qualitätsunterschiede zwischen
              ihnen sind ebenso groß. Bevor Sie sich für einen Service entscheiden, lohnt sich ein
              genauer Blick auf Kommunikation, Preisstruktur und Support — genau dort zeigen sich
              unseriöse Anbieter meist zuerst. Wie der Bestellvorgang selbst abläuft, zeigt unsere
              Seite{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV kaufen
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-app.png"
                alt="IPTV Anbieter Deutschland vergleichen: seriöse Anbieter an der App-Auswahl erkennen"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warnzeichen eines unseriösen Anbieters
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {warningSigns.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was einen vertrauenswürdigen Anbieter auszeichnet
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {trustSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Deutschland IPTV wurde nach genau diesen Grundsätzen aufgebaut: transparente{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>{" "}
                ohne versteckte Kosten und ein Support-Team, das Sie direkt über{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  WhatsApp
                </Link>{" "}
                erreichen — schon vor dem Kauf.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Anbieter direkt vergleichen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Über die Grundregeln hinaus lohnt sich ein direkter Vergleich mehrerer Anbieter anhand
                derselben Kriterien: Serverstabilität, Senderauswahl, 4K-Qualität, Support und
                Laufzeiten. Eine ausführliche Checkliste mit direktem Anbietervergleich finden Sie in
                unserem Artikel{" "}
                <Link
                  href="/blog/best-iptv-providers-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Beste IPTV Anbieter 2026
                </Link>
                , und eine kompakte Zusammenfassung der wichtigsten Qualitätsmerkmale unter{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Checkliste: Fragen vor dem Kauf
              </h2>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted">
                {checklistQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <span aria-hidden className="mt-1 text-aqua">
                      ✓
                    </span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted">
                Weitere Qualitätskriterien im Detail finden Sie unter{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                , allgemeine Antworten in unseren{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ
                </Link>
                , und Antworten zur Rechtslage in unserem Artikel{" "}
                <Link href="/blog/iptv-legal-guide" className="text-aqua underline underline-offset-4">
                  Ist IPTV legal?
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
