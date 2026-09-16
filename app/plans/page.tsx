import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PricingTabs } from "@/components/plans/PricingTabs";
import { pricingFeatures } from "@/lib/plans";

// Primary keyword: "IPTV Preise" (transactional — the actual pricing/conversion
// page). Must NOT compete with "IPTV kaufen" (owned by the informational
// how-to-buy-safely guide /blog/how-to-buy-iptv, which funnels into this page)
// — see docs/seo/keyword-architecture.md.
export const metadata: Metadata = {
  // Plain title (no manual brand suffix): the root layout's title.template
  // ("%s | Deutschland IPTV") appends the brand once. Hardcoding the suffix
  // here too previously produced a doubled "| Deutschland IPTV | Deutschland IPTV"
  // in the rendered <title> tag. openGraph.title/twitter.title below are unaffected
  // by the template (they're independent fields), so those keep the suffix.
  title: "IPTV Preise – Tarife & Pakete im Überblick",
  description:
    "IPTV Preise bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte, 30.000+ Sender und 70.000+ Filme & Serien. Transparente Preise, sofortige Aktivierung.",
  keywords: ["IPTV Preise", "IPTV Abo", "IPTV Tarife", "IPTV Kosten"],
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/plans",
    title: "IPTV Preise – Tarife & Pakete im Überblick | Deutschland IPTV",
    description:
      "IPTV Preise bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte. Transparente Preise und sofortige Aktivierung.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "IPTV Preise – Tarife & Pakete im Überblick | Deutschland IPTV",
    description:
      "IPTV Preise bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte. Transparente Preise und sofortige Aktivierung.",
  },
};

// Distinct from the general FAQ categories in lib/faq-data.ts (abo, geräte,
// zahlung, problembehebung) — these three are specific to the pricing/plan
// structure itself, so this schema doesn't duplicate the /faq page's content.
const faqItems = [
  {
    question: "Kann ich die Geräteanzahl meines IPTV Tarifs nachträglich erhöhen?",
    answer:
      "Ja. Sie können jederzeit über WhatsApp auf einen Tarif mit mehr Geräten wechseln — die Preisdifferenz wird individuell mit Ihnen abgestimmt.",
  },
  {
    question: "Was passiert nach Ablauf meines IPTV Tarifs?",
    answer:
      "Ihr Zugang endet automatisch am Laufzeitende — es gibt keine automatische Verlängerung und keine versteckten Folgekosten. Sie entscheiden selbst, ob und wann Sie verlängern möchten.",
  },
  {
    question: "Warum sind längere Laufzeiten pro Monat günstiger?",
    answer:
      "Wie bei den meisten Abo-Modellen sinkt der Monatspreis mit der Laufzeit: Ein 2-Jahres-Tarif kostet pro Monat deutlich weniger als derselbe Zeitraum in mehreren kurzen Tarifen.",
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

export default function PlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Preise", href: "/plans" }]} />

      <section className="border-b border-border py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="IPTV Preise"
            title="IPTV Preise: Tarife für jeden Bedarf"
            description="Jeder Tarif enthält den vollen Funktionsumfang: 30.000+ Sender, 70.000+ Filme & Serien (VOD), EPG und 24/7 Support. Wählen Sie einfach Ihre Laufzeit und Geräteanzahl."
          />

          <PricingTabs />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was in jedem IPTV Tarif enthalten ist
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie sich die IPTV Preise zusammensetzen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die IPTV Preise richten sich nach zwei Faktoren: der Laufzeit (1 Monat bis 2 Jahre)
                und der Geräteanzahl (1 bis 3 Geräte gleichzeitig). Der Funktionsumfang bleibt dabei
                bei jedem Tarif identisch — Sie zahlen ausschließlich für Laufzeit und Geräteanzahl,
                nicht für einzelne Funktionen. Je länger die Laufzeit, desto niedriger der
                Monatspreis. Wer sich vor der Entscheidung unsicher ist, findet in unserem Artikel{" "}
                <Link href="/blog/how-to-buy-iptv" className="text-aqua underline underline-offset-4">
                  IPTV kaufen
                </Link>{" "}
                eine Schritt-für-Schritt-Anleitung für einen sicheren Kauf.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Noch unsicher, welcher Anbieter zu Ihnen passt?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bevor Sie sich festlegen, lohnt sich ein Blick auf unsere Seite{" "}
                <Link href="/iptv-anbieter-deutschland" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>{" "}
                mit Warnzeichen unseriöser Anbieter, oder auf{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>{" "}
                mit den wichtigsten Qualitätskriterien. Weitere Antworten rund um Abo, Geräte und
                Zahlung finden Sie in unseren{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen zu den Tarifen</h2>
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
