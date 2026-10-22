import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PricingTabs } from "@/components/plans/PricingTabs";
import { FaqList } from "@/components/content/FaqList";
import { Prose, ProseList, ProseSection, TextLink } from "@/components/content/Prose";
import { pricingFeatures } from "@/lib/plans";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV Abo Deutschland".
const title = "IPTV Abo Deutschland – Tarife und Laufzeiten";
const description =
  "IPTV Abo Deutschland: Laufzeit von 1 Monat bis 2 Jahre wählen, 1 bis 3 Geräte, gleicher Inhalt in jedem Tarif. Ohne automatische Verlängerung, Bestellung per WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tarife" },
  ...socialMetadata("/tarife", title, description),
};

const tariffFaq = [
  {
    question: "Kann ich während der Laufzeit weitere Geräte hinzufügen?",
    answer:
      "Ja. Schreiben Sie uns per WhatsApp, dann wechseln wir Ihren Zugang auf die gewünschte Geräteanzahl. Den Aufpreis nennen wir Ihnen vorab.",
  },
  {
    question: "Was passiert am Ende der Laufzeit?",
    answer:
      "Der Zugang läuft aus. Es entstehen keine Folgekosten, und es wird nichts automatisch verlängert. Wenn Sie weiterschauen möchten, melden Sie sich einfach bei uns.",
  },
  {
    question: "Warum ist der Monatspreis bei langen Laufzeiten niedriger?",
    answer:
      "Bei einer längeren Laufzeit zahlen Sie einmalig für einen größeren Zeitraum. Diesen Vorteil geben wir über einen günstigeren Gesamtpreis weiter.",
  },
];

export default function TarifePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Tarife", href: "/tarife" }]} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container className="flex flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Tarife</span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              IPTV Abo Deutschland: Laufzeit und Geräte frei wählen
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Zuerst die Laufzeit, dann die Anzahl der Geräte — mehr müssen Sie nicht entscheiden.
              Der Preis gilt für die gesamte Laufzeit.
            </p>
          </div>
          <PricingTabs />
        </Container>
      </section>

      <Container>
        <Prose>
          <ProseSection title="Das ist in jedem IPTV Abo enthalten">
            <ProseList items={pricingFeatures} />
          </ProseSection>

          <ProseSection title="Wie Sie die passende Laufzeit finden">
            <p>
              Wer IPTV Deutschland erst einmal im Alltag ausprobieren möchte, startet mit einem
              Monat oder drei Monaten. Wenn feststeht, dass Sie dabeibleiben, sind sechs Monate,
              ein Jahr oder zwei Jahre im Verhältnis günstiger.
            </p>
            <p>
              Bei der Geräteanzahl zählt, wie viele Bildschirme zur selben Zeit laufen sollen.
              Schauen zum Beispiel zwei Personen in verschiedenen Räumen gleichzeitig, wählen Sie
              zwei Geräte.
            </p>
          </ProseSection>

          <ProseSection title="Vom Tarif zur Freischaltung">
            <p>
              Ein Tipp auf „Per WhatsApp bestellen“ öffnet einen Chat mit einer vorbereiteten
              Nachricht zu Ihrem Tarif. Alles Weitere — Zahlung, Zugangsdaten, App-Empfehlung —
              klären wir dort. Den genauen Ablauf zeigt die Seite{" "}
              <TextLink href="/iptv-bestellen">IPTV bestellen</TextLink>, die Einrichtung auf dem
              Gerät beschreibt <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink>.
            </p>
          </ProseSection>

          <ProseSection title="Fragen zu den Tarifen">
            <FaqList items={tariffFaq} />
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
