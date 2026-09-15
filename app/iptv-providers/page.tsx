import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { pricingDurations } from "@/lib/plans";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

// Primary keyword: "IPTV Anbieter Deutschland" (trust validation / commercial
// investigation — sole owner of the bare "IPTV Anbieter" head term). Must NOT
// compete with "bester IPTV Anbieter" (owned by /best-iptv-service, quality
// criteria) or "beste IPTV Anbieter 2026" (owned by the blog pillar
// /blog/best-iptv-providers-2026) — see docs/seo/keyword-architecture.md.
// 2026-09 content refresh: expanded into the full trust/comparison/legal hub
// for this keyword (criteria, live pricing table, legal section, FAQPage
// schema). The on-page H1/title use "Bester Anbieter im Vergleich" rather
// than the exact phrase "bester IPTV Anbieter" to stay clear of that page's
// owned term — see the cannibalization note above.
export const metadata: Metadata = {
  title: "IPTV Anbieter Deutschland 2026 – Bester Anbieter im Vergleich",
  description:
    "IPTV Anbieter Deutschland im Vergleich: Tarife ab 30€, 7-Tage-Zufriedenheitsgarantie und 24/7 WhatsApp-Support. Jetzt Preise & Rechtslage prüfen.",
  keywords: [
    "IPTV Anbieter Deutschland",
    "IPTV Anbieter Deutschland 2026",
    "IPTV Anbieter",
    "IPTV Anbieter Vergleich",
    "seriöser IPTV Anbieter",
    "vertrauenswürdiger IPTV Anbieter",
    "ist IPTV legal",
  ],
  alternates: {
    canonical: "/iptv-providers",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-providers",
    title: "IPTV Anbieter Deutschland 2026 – Bester Anbieter im Vergleich | Deutschland IPTV",
    description:
      "IPTV Anbieter Deutschland im Vergleich: Tarife ab 30€, 7-Tage-Zufriedenheitsgarantie und 24/7 WhatsApp-Support.",
    images: [{ url: "https://deutschland-iptv.online/images/home-page.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/home-page.png"],
    title: "IPTV Anbieter Deutschland 2026 – Bester Anbieter im Vergleich | Deutschland IPTV",
    description:
      "IPTV Anbieter Deutschland im Vergleich: Tarife ab 30€, 7-Tage-Zufriedenheitsgarantie und 24/7 WhatsApp-Support.",
  },
};

const criteria = [
  {
    title: "Serverstabilität",
    description:
      "Ein zuverlässiger IPTV Anbieter Deutschland bleibt auch dann stabil, wenn während eines Bundesliga-Abends Tausende Zuschauer gleichzeitig auf denselben Server zugreifen. Häufiges Puffern oder Aussetzer bei Live-Sport sind das deutlichste Warnsignal für unterdimensionierte Infrastruktur.",
  },
  {
    title: "Kundensupport",
    description:
      "Erreichbarkeit zählt doppelt: schon vor dem Kauf, um Fragen zu klären, und erst recht danach, wenn beim Einrichten mal etwas hakt. Ein direkter WhatsApp-Kontakt statt eines anonymen Formulars ist dabei ein starkes Vertrauenssignal.",
  },
  {
    title: "Preistransparenz",
    description:
      "Feste Preise pro Laufzeit, keine automatische Verlängerung und keine versteckten Zusatzkosten — genau das sollte jeder Tarif von Anfang an klar ausweisen, statt Details erst nach der Zahlung offenzulegen.",
  },
  {
    title: "Unterstützte Geräte",
    description:
      "Ob Smart TV, Fire TV Stick, Android TV, Smartphone oder PC: Ein guter Anbieter funktioniert dort, wo Sie tatsächlich fernsehen, ohne dass Sie zusätzliche Hardware kaufen müssen.",
  },
  {
    title: "Rechtliche Lage",
    description:
      "Seriöse Anbieter kommunizieren offen, statt mit unrealistisch günstigen „Alles inklusive“-Angeboten zu locken. Was dabei rechtlich tatsächlich zählt, erklären wir im Abschnitt weiter unten.",
  },
];

const warningSigns = [
  "Keine Möglichkeit, den Anbieter vor dem Kauf zu erreichen — nur ein anonymes Bestellformular.",
  "Unklare oder stark widersprüchliche Preise ohne klare Tarifstruktur.",
  "Keine Angaben zu Senderanzahl, Qualität oder unterstützten Geräten.",
  "Keine Antwort auf Support-Anfragen nach der Zahlung.",
  "Auffällig viele, aber austauschbare Fünf-Sterne-Bewertungen ohne konkrete Details.",
];

const trustSignals = [
  "Direkter, persönlicher Kontakt über WhatsApp — schon vor dem Kauf.",
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

// Same source of truth as /plans (lib/plans.ts) — the table below stays in
// sync automatically instead of duplicating hardcoded prices.
const comparisonMonths: Record<string, number> = { "6-months": 6, "1-year": 12, "2-years": 24 };
const comparisonRows = pricingDurations.filter((duration) => duration.id in comparisonMonths);

const faqItems = [
  {
    question: "Was ist der beste IPTV Anbieter in Deutschland?",
    answer:
      "Es gibt nicht „den einen“ besten Anbieter für jeden — entscheidend sind Serverstabilität, Preistransparenz, Kundensupport, Gerätekompatibilität und eine saubere rechtliche Kommunikation. Einen ausführlichen Kriterien-Vergleich finden Sie auf unserer Seite Bester IPTV Anbieter.",
  },
  {
    question: "Wie viel kostet ein IPTV Abo in Deutschland?",
    answer:
      "Die Preise richten sich nach Laufzeit und Geräteanzahl, bei Deutschland IPTV ab 30€ für 6 Monate. Die vollständige Übersicht mit allen Laufzeiten und Geräteoptionen finden Sie auf unserer Preisseite.",
  },
  {
    question: "Benötige ich ein zusätzliches Gerät für IPTV?",
    answer:
      "In den meisten Fällen nicht. IPTV läuft direkt auf Smart TVs, Smartphones, Tablets und PCs. Nur bei älteren Fernsehern ohne eigenen App Store lohnt sich ein günstiger Fire TV Stick oder eine Android-Box als Zusatzgerät.",
  },
  {
    question: "Welche Warnzeichen deuten auf einen unseriösen IPTV Anbieter hin?",
    answer:
      "Keine Kontaktmöglichkeit vor dem Kauf, eine unklare Preisstruktur, fehlende Informationen zu Inhalten oder Geräten sowie Preise deutlich unter dem Marktdurchschnitt sind typische Warnsignale.",
  },
  {
    question: "Ist IPTV in Deutschland legal?",
    answer:
      "IPTV ist als Übertragungstechnik uneingeschränkt legal — vergleichbar mit Kabel oder Satellit, nur über das Internet. Entscheidend ist, ob der Anbieter die übertragenen Inhalte lizenziert hat, nicht die Technik selbst. Details dazu im Abschnitt „Ist IPTV legal in Deutschland?“ weiter oben.",
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
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "IPTV Anbieter Deutschland", href: "/iptv-providers" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anbietervergleich 2026"
            title="IPTV Anbieter Deutschland 2026: Bester Anbieter im Vergleich"
            description="Stabile Server, faire Preise und echter Support statt leerer Versprechen — so erkennen Sie einen seriösen IPTV Anbieter und vergleichen unsere aktuellen Tarife direkt."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Klassisches Kabel-TV verliert in Deutschland spürbar an Boden: Laut dem Zattoo
              TV-Streaming-Report 2026 empfangen inzwischen rund 5,72 Millionen Haushalte ihr
              Fernsehprogramm per IPTV — ein Plus von etwa einer Million gegenüber dem Vorjahr —,
              während der Marktanteil von Kabelanschlüssen auf 35,2 Prozent gesunken ist. Damit hat
              Internetfernsehen den klassischen Kabelanschluss als meistgenutzten einzelnen
              Empfangsweg erstmals überholt. Kein Wunder: Ein guter IPTV Anbieter Deutschland bietet
              mehr Sender, eine umfangreiche VOD-Bibliothek und deutlich mehr Geräteflexibilität als
              ein starres Kabelpaket — bei oft niedrigeren laufenden Kosten. Der Haken an diesem
              Wachstum: Mit steigender Nachfrage wächst auch die Zahl schwarzer Schafe auf dem Markt.
              Diese Seite zeigt, woran Sie einen wirklich vertrauenswürdigen Anbieter erkennen, wie
              sich unsere aktuellen Tarife zusammensetzen und wie die Rechtslage rund um IPTV in
              Deutschland tatsächlich aussieht.
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/home-page.png"
                alt="IPTV Anbieter Deutschland: breite Auswahl an Live-Sport und Unterhaltung als Kabel-Alternative"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie wählt man einen vertrauenswürdigen IPTV Anbieter?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Der deutsche Markt ist groß, und die Qualitätsunterschiede zwischen Anbietern sind es
                ebenso. Diese fünf Kriterien entscheiden in der Praxis am häufigsten darüber, ob ein
                IPTV Anbieter Deutschland auf Dauer überzeugt oder schnell zur Enttäuschung wird.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {criteria.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-base font-semibold text-foreground">Warnzeichen eines unseriösen Anbieters</h3>
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted">
                  {warningSigns.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-base font-semibold text-foreground">Was einen vertrauenswürdigen Anbieter auszeichnet</h3>
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted">
                  {trustSignals.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV Preise im Vergleich: 6 Monate, 1 Jahr, 2 Jahre
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Alle Tarife enthalten denselben vollen Funktionsumfang — 30.000+ Sender, 70.000+
                Filme &amp; Serien, EPG und 24/7 Support. Sie zahlen ausschließlich für Laufzeit und
                Geräteanzahl, nicht für einzelne Funktionen. Die folgende Tabelle zeigt unsere
                aktuellen Preise für die drei beliebtesten Laufzeiten (Stand: siehe Preisseite).
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead className="bg-background-elevated">
                    <tr>
                      <th className="p-4 font-semibold text-foreground">Laufzeit</th>
                      <th className="p-4 font-semibold text-foreground">1 Gerät</th>
                      <th className="p-4 font-semibold text-foreground">2 Geräte</th>
                      <th className="p-4 font-semibold text-foreground">3 Geräte</th>
                      <th className="p-4 font-semibold text-foreground">Ab pro Monat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((duration) => {
                      const tier1 = duration.tiers.find((tier) => tier.devices === 1);
                      const tier2 = duration.tiers.find((tier) => tier.devices === 2);
                      const tier3 = duration.tiers.find((tier) => tier.devices === 3);
                      const months = comparisonMonths[duration.id];
                      const monthlyPrice =
                        tier1 && months ? (tier1.price / months).toFixed(2).replace(".", ",") : null;

                      return (
                        <tr key={duration.id} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">
                            {duration.label}
                            {duration.badge ? (
                              <span className="ml-2 text-xs font-normal text-aqua">{duration.badge}</span>
                            ) : null}
                          </td>
                          <td className="p-4 text-muted">{tier1 ? `${tier1.price}€` : "—"}</td>
                          <td className="p-4 text-muted">{tier2 ? `${tier2.price}€` : "—"}</td>
                          <td className="p-4 text-muted">{tier3 ? `${tier3.price}€` : "—"}</td>
                          <td className="p-4 font-semibold text-aqua">
                            {monthlyPrice ? `${monthlyPrice}€` : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Auch 1-Monats- und 3-Monats-Tarife sowie alle Geräteoptionen im Detail finden Sie auf
                unserer Seite{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  IPTV Preise
                </Link>
                . Fragen zu einem Tarif beantwortet unser Team direkt über{" "}
                <a
                  href={WHATSAPP_DEFAULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua underline underline-offset-4"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Ist IPTV legal in Deutschland?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Kurz gesagt: Die Technik selbst schon, uneingeschränkt. IPTV (Internet Protocol
                Television) ist zunächst nur ein Übertragungsweg — vergleichbar mit Kabel oder
                Satellit, nur eben über das Internet statt über ein Kabel oder eine Antenne. Diese
                Technologie ist in Deutschland genauso legal wie klassisches Kabelfernsehen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Rechtlich entscheidend ist nicht der Übertragungsweg, sondern ob der jeweilige
                Anbieter die Rechte an den übertragenen Sendern, Filmen und Serien tatsächlich besitzt
                oder ordnungsgemäß lizenziert hat — genau wie bei jedem anderen Streaming-Dienst. Als
                Endnutzer lässt sich das nicht vollständig nachprüfen, doch Transparenz, realistische
                Preise und erreichbarer Support vor und nach dem Kauf sind die verlässlichsten
                Anhaltspunkte für einen seriös operierenden IPTV Anbieter Deutschland. Übrigens: Der
                Rundfunkbeitrag (früher GEZ) ist ein davon unabhängiges, an den Haushalt gebundenes
                Thema — er wird durch die Nutzung von IPTV weder ausgelöst noch aufgehoben. Eine
                ausführliche Einordnung mit allen Details liefert unser Artikel{" "}
                <Link href="/blog/iptv-legal-guide" className="text-aqua underline underline-offset-4">
                  Ist IPTV legal?
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum Deutschland IPTV?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wir haben Deutschland IPTV bewusst nach den Kriterien aufgebaut, die weiter oben auf
                dieser Seite beschrieben sind. Unsere Geschäftsbedingungen, Datenschutzerklärung und{" "}
                <Link href="/refund-policy" className="text-aqua underline underline-offset-4">
                  7-Tage-Zufriedenheitsgarantie
                </Link>{" "}
                sind öffentlich einsehbar statt im Kleingedruckten versteckt — mehr zu uns erfahren
                Sie auf der Seite{" "}
                <Link href="/about" className="text-aqua underline underline-offset-4">
                  Über uns
                </Link>
                . Unser Support-Team ist 24/7 direkt über{" "}
                <a
                  href={WHATSAPP_DEFAULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua underline underline-offset-4"
                >
                  WhatsApp
                </a>{" "}
                erreichbar — schon vor dem Kauf, nicht erst danach. Und nach Zahlungsbestätigung
                erhalten Sie Ihre Zugangsdaten in der Regel innerhalb weniger Minuten, ohne tagelange
                Wartezeit. Wie umfangreich unsere Tarife im Detail ausgestattet sind, zeigt unsere
                Seite{" "}
                <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                  IPTV Service
                </Link>
                , und die wichtigsten Qualitätsmerkmale im Überblick finden Sie unter{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Checkliste: Fragen vor dem Kauf</h2>
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
                Einen direkten Vergleich mehrerer Anbieter anhand derselben Kriterien liefert unser
                Artikel{" "}
                <Link href="/blog/best-iptv-providers-2026" className="text-aqua underline underline-offset-4">
                  Beste IPTV Anbieter 2026
                </Link>
                , allgemeine Antworten rund um Abo, Geräte und Zahlung finden Sie in unseren{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ
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

            <div className="flex justify-center">
              <Button href={WHATSAPP_DEFAULT_LINK} external variant="whatsapp-white" className="px-8 py-4 text-base">
                Jetzt auf WhatsApp beraten lassen
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
