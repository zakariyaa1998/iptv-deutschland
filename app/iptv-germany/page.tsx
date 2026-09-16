import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PricingTabs } from "@/components/plans/PricingTabs";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

// Deliberately a different search intent from /iptv-anbieter-deutschland
// (direct provider-comparison/trust page) — this page combines a broad
// "everything about IPTV in Germany" overview with strong on-page conversion
// (immediate hero CTA, full buy-button pricing via <PricingTabs/>, a branded
// us-vs-cable comparison). See docs/seo/keyword-architecture.md for the
// existing map.
//
// 2026-09: title/H1 deliberately use the English "IPTV Germany" instead of
// "IPTV Deutschland" — the latter is docs/seo/keyword-architecture.md's
// assigned sole primary keyword for the homepage (`/`). An earlier draft of
// this page led with "IPTV Deutschland 2026", following the site's existing
// bare-term/dated-variant split pattern (e.g. "bester IPTV Anbieter" vs.
// "beste IPTV Anbieter 2026"), but that pattern is flagged in the doc itself
// as the site's highest-risk existing cannibalization pair — not something to
// add a second instance of. Swapping to "IPTV Germany" sidesteps the exact-
// match collision entirely while the page body stays fully German. Content
// still discusses "IPTV in Deutschland" naturally throughout — only the
// title/H1/structured-data head-term target changed.
export const metadata: Metadata = {
  title: "IPTV Germany – Der große Ratgeber 2026 (Funktion, Legalität, Vergleich)",
  description:
    "IPTV Germany 2026: Funktion, Legalität & Vergleich einfach erklärt – plus Tarife ab 30€ mit 7-Tage-Garantie. Jetzt informieren & sichern.",
  keywords: [
    "IPTV Germany",
    "IPTV Germany 2026",
    "IPTV kaufen Deutschland",
    "IPTV Test Deutschland",
    "IPTV Kosten Deutschland",
  ],
  alternates: {
    canonical: "/iptv-germany",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-germany",
    title: "IPTV Germany – Der große Ratgeber 2026 (Funktion, Legalität, Vergleich) | Deutschland IPTV",
    description:
      "IPTV Germany 2026: Funktion, Legalität & Vergleich einfach erklärt – plus Tarife ab 30€ mit 7-Tage-Garantie.",
    images: [{ url: "https://deutschland-iptv.online/images/Iptv-germany1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/Iptv-germany1.jpg"],
    title: "IPTV Germany – Der große Ratgeber 2026 (Funktion, Legalität, Vergleich) | Deutschland IPTV",
    description:
      "IPTV Germany 2026: Funktion, Legalität & Vergleich einfach erklärt – plus Tarife ab 30€ mit 7-Tage-Garantie.",
  },
};

const boomReasons = [
  {
    title: "Steigende Kosten für Kabel, GEZ & Streaming-Abos",
    description:
      "Viele Haushalte zahlen heute für Kabelanschluss, Rundfunkbeitrag und mehrere einzelne Streaming-Dienste gleichzeitig. Deutschland IPTV bündelt Live-TV, Filme und Serien in einem einzigen, festen Preis.",
  },
  {
    title: "Der Wunsch nach echter Flexibilität",
    description:
      "Feste Sendezeiten und ein Wohnzimmer-Receiver reichen längst nicht mehr. Unsere Tarife laufen gleichzeitig auf Smart TV, Smartphone und PC — genau dort, wo du gerade bist.",
  },
  {
    title: "Enorme Sender- und Inhaltsvielfalt",
    description:
      "Ein einzelnes Kabelpaket deckt selten alle Interessen ab. Mit 30.000+ Sendern und 70.000+ Filmen & Serien bekommst du lokale und internationale Inhalte in einem Abo.",
  },
];

const trustBar = [
  "7-Tage-Zufriedenheitsgarantie",
  "24/7 Support direkt über WhatsApp",
  "Sofortige Aktivierung nach Zahlung",
];

const comparisonRows = [
  {
    criterion: "Preis",
    us: "Ab 30€ für 6 Monate — ein Preis für den vollen Funktionsumfang",
    cable: "Separater Vertrag, oft zzgl. Aufpreis für HD-Pakete oder Sportsender",
  },
  {
    criterion: "Vertragslaufzeit",
    us: "Flexibel von 1 Monat bis 2 Jahre, keine automatische Verlängerung",
    cable: "Meist 12–24 Monate Mindestlaufzeit",
  },
  {
    criterion: "Senderauswahl",
    us: "30.000+ lokale & internationale Sender plus 70.000+ Filme & Serien",
    cable: "Festes, meist regional begrenztes Programmpaket",
  },
  {
    criterion: "Geräte",
    us: "Smart TV, Fire TV Stick, Android TV, Smartphone & PC gleichzeitig",
    cable: "An Receiver und Kabelanschluss gebunden",
  },
  {
    criterion: "Aktivierung",
    us: "Meist innerhalb weniger Minuten nach Zahlungsbestätigung",
    cable: "Techniker-Termin oft nötig, teils mehrere Tage Wartezeit",
  },
  {
    criterion: "Support",
    us: "Direkt über WhatsApp, 24/7 erreichbar — auch vor dem Kauf",
    cable: "Telefon-Hotline mit Warteschleife",
  },
];

const faqItems = [
  {
    question: "Wie schnell wird mein Zugang aktiviert?",
    answer:
      "In der Regel innerhalb weniger Minuten nach Zahlungsbestätigung, spätestens aber innerhalb weniger Stunden. Du erhältst deine Zugangsdaten direkt über WhatsApp.",
  },
  {
    question: "Was benötige ich, um mit IPTV in Deutschland zu starten?",
    answer:
      "Eine stabile Internetverbindung (mindestens 10 Mbit/s für HD, 25 Mbit/s für 4K) und ein Gerät, das du wahrscheinlich schon besitzt: Smart TV, Smartphone, PC oder Fire TV Stick. Zusätzliche Hardware ist nur bei sehr alten Fernsehern ohne eigenen App Store nötig.",
  },
  {
    question: "Wie viel kostet IPTV in Deutschland bei euch?",
    answer:
      "Unsere Tarife starten ab 30€ für 6 Monate. Die vollständige Übersicht mit allen Laufzeiten und Geräteoptionen findest du weiter oben im Abschnitt „Unsere Pakete“.",
  },
  {
    question: "Muss ich einen langfristigen Vertrag abschließen?",
    answer:
      "Nein. Du wählst zwischen 1 Monat und 2 Jahren Laufzeit, ganz ohne automatische Verlängerung. Nach Ablauf entscheidest du selbst, ob und wie du weitermachst.",
  },
  {
    question: "Ist IPTV in Deutschland legal?",
    answer:
      "Ja, als Übertragungstechnik ist IPTV uneingeschränkt legal. Entscheidend ist die Lizenzierung der Inhalte durch den Anbieter — mehr dazu im Abschnitt „Ist IPTV legal?“ weiter oben.",
  },
  {
    question: "Was passiert, wenn ich mit dem Service nicht zufrieden bin?",
    answer:
      "Jeder Tarif kommt mit einer 7-Tage-Zufriedenheitsgarantie. Funktioniert dein Zugang nicht wie beschrieben und unser Support kann das Problem nicht lösen, erstatten wir dir den Kaufpreis im Rahmen unserer Rückerstattungsrichtlinie.",
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

export default function IptvGermanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Germany", href: "/iptv-germany" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-6">
            <SectionHeading
              as="h1"
              eyebrow="IPTV Germany 2026"
              title="IPTV Germany – Der große Ratgeber 2026 (Funktion, Legalität, Vergleich)"
              description="Der komplette Überblick über IPTV in Deutschland — plus unser bestes Angebot: 30.000+ Sender, 4K-Qualität und 7 Tage Zufriedenheitsgarantie."
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={WHATSAPP_DEFAULT_LINK} external variant="primary" className="px-8 py-4 text-base">
                Jetzt testen
              </Button>
              <Button href="#pakete" variant="outline" className="px-8 py-4 text-base">
                Preise ansehen
              </Button>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/Iptv-germany1.jpg"
              alt="Familie schaut IPTV in Deutschland auf einem modernen Smart TV im Wohnzimmer"
              fill
              priority
              decoding="async"
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist IPTV und warum ist es die Zukunft?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                IPTV (Internet Protocol Television) überträgt Fernsehen über deine ganz normale
                Internetverbindung statt über Kabel, Satellit oder Antenne. Statt eines starren
                Programmpakets bekommst du Live-TV, eine riesige Filme- und Serien-Bibliothek und
                einen elektronischen Programmführer in einem einzigen, flexiblen Abo — nutzbar auf
                praktisch jedem Gerät, das du bereits besitzt. Genau diese Kombination aus Technologie
                und Freiheit macht IPTV für immer mehr deutsche Haushalte zur naheliegenden Zukunft des
                Fernsehens — und genau darauf ist Deutschland IPTV spezialisiert.
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum IPTV in Deutschland boomt
              </h2>
              <div className="grid gap-5 sm:grid-cols-1">
                {boomReasons.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col gap-3 rounded-2xl border border-aqua/30 bg-aqua/5 p-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 sm:p-7">
              {trustBar.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-black">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Ist IPTV legal?</h2>
              <p className="text-base leading-relaxed text-muted">
                Ja, als Übertragungstechnik ist IPTV in Deutschland uneingeschränkt legal — genau wie
                Kabel oder Satellit, nur eben über das Internet. Entscheidend ist ausschließlich, ob
                der Anbieter die übertragenen Inhalte ordnungsgemäß lizenziert hat, nicht die Technik
                selbst. Die vollständige Rechtslage inklusive Rundfunkbeitrag erklären wir ausführlich
                in unserem Artikel{" "}
                <Link href="/blog/iptv-legal-guide" className="text-aqua underline underline-offset-4">
                  Ist IPTV legal in Deutschland?
                </Link>
                .
              </p>
            </section>

            <section id="pakete" className="flex flex-col gap-6 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Unsere Pakete</h2>
              <p className="text-base leading-relaxed text-muted">
                Jeder Tarif enthält denselben vollen Funktionsumfang — du wählst nur Laufzeit und
                Geräteanzahl. Wähle direkt unten aus und sichere dir dein Angebot per WhatsApp.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/Iptv-germany2.jpg"
                  alt="Einfache und sichere Bestellung eines IPTV Tarifs per Smartphone"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </section>

            <PricingTabs />

            <section className="flex flex-col gap-6 pt-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum Deutschland IPTV wählen?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Der direkte Vergleich zeigt, warum immer mehr Haushalte in Deutschland von Kabel-TV zu
                Deutschland IPTV wechseln.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/Iptv-germany3.jpg"
                  alt="Vergleich: klassische Satellitenschüssel gegenüber modernem IPTV-Streaming auf dem Smart TV"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead className="bg-background-elevated">
                    <tr>
                      <th className="p-4 font-semibold text-foreground">Kriterium</th>
                      <th className="p-4 font-semibold text-aqua">Deutschland IPTV</th>
                      <th className="p-4 font-semibold text-foreground">Klassisches Kabel-TV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.criterion} className="border-t border-border align-top">
                        <td className="p-4 font-medium text-foreground">{row.criterion}</td>
                        <td className="p-4 text-muted">{row.us}</td>
                        <td className="p-4 text-muted">{row.cable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

      {/* Strong final CTA — WhatsApp button plus a direct jump back to the
          Pakete section, as requested, rather than only the shared ContactCTA. */}
      <section className="py-20 sm:py-28">
        <Container>
          <ScrollReveal className="bg-noise relative overflow-hidden rounded-3xl border border-aqua/30 bg-background-elevated px-6 py-16 text-center sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aqua/20 blur-[100px]"
            />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Bereit, auf IPTV Deutschland umzusteigen?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Schreib uns jetzt auf WhatsApp und erhalte innerhalb weniger Minuten eine persönliche
                Tarifempfehlung — inklusive 7-Tage-Zufriedenheitsgarantie.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href={WHATSAPP_DEFAULT_LINK}
                  external
                  variant="whatsapp-white"
                  className="px-8 py-4 text-base"
                >
                  Auf WhatsApp schreiben
                </Button>
                <Button href="#pakete" variant="outline" className="px-8 py-4 text-base">
                  Zu den Paketen
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
