import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Primary keyword: "IPTV kaufen" (clear commercial/transactional intent —
// re-mapped from the previous "IPTV Service" primary per the 2026-08 keyword
// architecture update). Secondary: "IPTV Deutschland kaufen", "IPTV Deutschland",
// "IPTV bestellen". Must NOT compete with "was ist IPTV" (owned by
// /blog/what-is-iptv-guide), "IPTV 2026 / IPTV Kosten" (owned by
// /blog/iptv-guide-2026), or the homepage's "IPTV Deutschland" (this page owns
// the transactional "kaufen" variant, not the bare brand/category term). The
// blog post /blog/how-to-buy-iptv was retargeted to "IPTV sicher kaufen" so it
// no longer competes with this page for "IPTV kaufen" — see
// docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  title: "IPTV kaufen – IPTV Deutschland bestellen",
  description:
    "IPTV kaufen bei Deutschland IPTV: IPTV Deutschland in wenigen Minuten bestellen. Tausende Sender, Filme und Serien in HD, Full HD und 4K mit persönlichem Support.",
  keywords: [
    "IPTV kaufen",
    "IPTV Deutschland kaufen",
    "IPTV Deutschland",
    "IPTV bestellen",
    "IPTV Service",
  ],
  alternates: {
    canonical: "/iptv-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-service",
    title: "IPTV kaufen – IPTV Deutschland bestellen | Deutschland IPTV",
    description:
      "IPTV Deutschland kaufen: Ablauf, Inhalte und worauf Sie bei der Anbieterwahl achten sollten — verständlich erklärt von Deutschland IPTV.",
    images: [{ url: "https://deutschland-iptv.online/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/streaming-technologie.png"],
    title: "IPTV kaufen – IPTV Deutschland bestellen | Deutschland IPTV",
    description:
      "IPTV Deutschland kaufen: Ablauf, Inhalte und worauf Sie bei der Anbieterwahl achten sollten — verständlich erklärt von Deutschland IPTV.",
  },
};

const faqItems = [
  {
    question: "Was genau umfasst der IPTV Service von Deutschland IPTV?",
    answer:
      "Ein Abo bündelt Live-TV mit 30.000+ Sendern, eine umfangreiche VOD-Bibliothek mit Filmen und Serien sowie einen elektronischen Programmführer (EPG) — alles in einem einzigen Zugang, nutzbar auf mehreren Geräten gleichzeitig.",
  },
  {
    question: "Benötige ich eine Mindestvertragslaufzeit für den IPTV Service?",
    answer:
      "Nein. Deutschland IPTV bietet flexible Tarife mit 6 Monaten, 1 Jahr oder 2 Jahren Laufzeit ohne automatische Verlängerung.",
  },
  {
    question: "Wie schnell wird mein Zugang nach der Bestellung aktiviert?",
    answer:
      "In der Regel erhalten Sie Ihre Zugangsdaten innerhalb weniger Minuten nach Bestätigung Ihrer Bestellung über WhatsApp.",
  },
  {
    question: "Welche Internetgeschwindigkeit brauche ich für den Service?",
    answer:
      "Für flüssiges HD-Streaming empfehlen wir mindestens 10 Mbit/s, für 4K-Inhalte idealerweise 25 Mbit/s oder mehr — die meisten modernen Breitbandanschlüsse erfüllen das problemlos.",
  },
  {
    question: "Ist die Nutzung eines IPTV Service in Deutschland legal?",
    answer:
      "Die Nutzung eines IPTV Dienstes mit ordnungsgemäß lizenzierten Inhalten ist legal. Achten Sie auf einen Anbieter, der transparent kommuniziert und ein nachvollziehbares Geschäftsmodell hat.",
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

export default function IptvServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "IPTV Service", href: "/iptv-service" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="IPTV kaufen"
            title="IPTV kaufen: IPTV Deutschland einfach bestellen"
            description="So bestellen Sie IPTV Deutschland in wenigen Minuten: Ablauf, Inhalte im Abo und wie Sie den richtigen Anbieter für sich finden."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Wer IPTV kaufen möchte, bestellt kein physisches Produkt, sondern ein Streaming-Abo:
                IPTV überträgt Fernsehen über Ihre bestehende Internetverbindung statt über Kabel,
                Satellit oder eine Antenne. Wer die reine Definition und Technik dahinter von Grund
                auf verstehen möchte, findet eine ausführliche Erklärung in unserem Artikel{" "}
                <Link href="/blog/what-is-iptv-guide" className="text-aqua underline underline-offset-4">
                  Was ist IPTV?
                </Link>
                . Auf dieser Seite geht es konkret darum, wie Sie IPTV Deutschland bei uns bestellen:
                wie der Ablauf aussieht, was im Abo enthalten ist und wie Sie es auf Ihren Geräten
                nutzen.
              </p>
              <p>
                Deutschland IPTV bündelt Live-TV, eine umfangreiche VOD-Bibliothek und einen
                elektronischen Programmführer in einem einzigen Abo — mit stabilen Servern und
                persönlichem Support. Wer zusätzlich Kosten, Einrichtung und Anbieterwahl in einem
                einzigen Ratgeber nachlesen möchte, findet das in unserem{" "}
                <Link href="/blog/iptv-guide-2026" className="text-aqua underline underline-offset-4">
                  vollständigen IPTV Ratgeber 2026
                </Link>
                .
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV bestellen: So läuft der Kauf ab
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach der Bestellung erhalten Sie persönliche Zugangsdaten oder eine Playlist-URL. Eine
                IPTV App auf Ihrem Gerät lädt damit automatisch die Senderliste, den elektronischen
                Programmführer (EPG) und die VOD-Bibliothek. Technisch betrachtet funktioniert das wie
                digitaler TV-Empfang, nur vollständig über das offene Internet — ganz ohne Antenne
                oder Kabelanschluss.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/streaming-technologie.png"
                  alt="IPTV Service Deutschland: Streaming-Technologie auf mehreren Geräten im Überblick"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Der Deutschland IPTV Service im Überblick
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>30.000+ Sender in HD, Full HD und 4K</li>
                <li>Umfangreiche VOD-Bibliothek mit Filmen und Serien</li>
                <li>Elektronischer Programmführer (EPG) für die volle Programmübersicht</li>
                <li>Nutzbar auf Smart TV, Fire TV Stick, Android TV, iPhone, Android und PC</li>
                <li>Persönlicher Kundenservice über WhatsApp</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Service im Vergleich zu Kabel- und Satelliten-TV
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Klassisches Kabel- oder Satelliten-TV bindet Sie an einen festen Anschluss, oft mit
                separater Empfangsgebühr und begrenzter Senderauswahl. Ein IPTV Service läuft dagegen
                über Ihre bereits vorhandene Internetverbindung und bietet ein deutlich größeres
                Angebot an Sendern und Inhalten — unabhängig vom Wohnzimmer-TV, auch unterwegs auf dem
                Smartphone. Den vollständigen Kostenvergleich und die technischen Voraussetzungen für
                den Umstieg finden Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-vs-cable-tv" className="text-aqua underline underline-offset-4">
                  IPTV vs. Kabel-TV
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den passenden IPTV Anbieter finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder Anbieter liefert dieselbe Qualität. Serverstabilität, transparente Preise
                und echter Kundenservice machen den Unterschied. Unser Ratgeber{" "}
                <Link href="/iptv-anbieter-deutschland" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>{" "}
                zeigt, wie Sie seriöse von unseriösen Anbietern unterscheiden, und{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>{" "}
                fasst die wichtigsten Qualitätskriterien zusammen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Service auf jedem Gerät nutzen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Unser IPTV Service läuft auf nahezu jedem internetfähigen Gerät. Ausführliche
                Einrichtungsanleitungen finden Sie für{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  IPTV Smart TV
                </Link>
                , für{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  IPTV Fire TV Stick
                </Link>{" "}
                und für{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  IPTV Android TV
                </Link>
                . Einen Überblick über die aktuellen Konditionen finden Sie auf unserer Seite{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen zum IPTV kaufen</h2>
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
