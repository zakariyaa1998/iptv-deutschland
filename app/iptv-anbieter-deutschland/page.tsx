import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { FaqList } from "@/components/content/FaqList";
import { Prose, ProseList, ProseSection, TextLink } from "@/components/content/Prose";
import { WHATSAPP_TEST_LINK } from "@/lib/whatsapp";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV Anbieter Deutschland". No superiority claims ("beste",
// "bester") and no comparison with named competitors (UWG).
const title = "IPTV Anbieter Deutschland – worauf Sie achten sollten";
const description =
  "IPTV Anbieter Deutschland: woran Sie einen seriösen Dienst erkennen, welche Fragen Sie vor dem Abo stellen sollten und wie Deutschland IPTV arbeitet.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-anbieter-deutschland" },
  ...socialMetadata("/iptv-anbieter-deutschland", title, description),
};

const checklist = [
  "Klare Preise für die ganze Laufzeit, ohne versteckte Gebühren und ohne automatische Verlängerung.",
  "Ein Testzugang, bevor Sie bezahlen, damit Sie Bild und App auf Ihrem eigenen Gerät prüfen können.",
  "Erreichbare Ansprechpartner auf Deutsch, per Chat und per E-Mail.",
  "Eine Anleitung für Ihr Gerät, statt nur einer Liste mit Zugangsdaten.",
  "Ein Impressum, eine Datenschutzerklärung und nachvollziehbare Regeln für Rückerstattungen.",
  "Ehrliche Antworten auf die Frage, ob Ihr Gerät und Ihre Leitung geeignet sind.",
];

const anbieterFaq = [
  {
    question: "Woran erkenne ich einen unseriösen IPTV Anbieter?",
    answer:
      "Warnzeichen sind fehlende Kontaktangaben, Preise, die erst nach der Zahlung feststehen, Abos, die sich ohne Hinweis verlängern, und Versprechen, die sich nicht überprüfen lassen. Fragen Sie vor der Zahlung nach, und bestehen Sie auf einem Test.",
  },
  {
    question: "Muss ein IPTV Anbieter in Deutschland ein Impressum haben?",
    answer:
      "Geschäftsmäßige Websites in Deutschland müssen Angaben zum Anbieter machen. Ein fehlendes Impressum ist deshalb ein Grund, vorsichtig zu sein.",
  },
  {
    question: "Was sollte ich vor dem ersten Abo fragen?",
    answer:
      "Welche App für Ihr Gerät empfohlen wird, wie viele Bildschirme gleichzeitig laufen dürfen, was am Ende der Laufzeit passiert und wie Sie bei Problemen Hilfe bekommen.",
  },
];

export default function IptvAnbieterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "IPTV Anbieter Deutschland", href: "/iptv-anbieter-deutschland" },
        ]}
      />

      <PageIntro
        eyebrow="Anbieter"
        title="IPTV Anbieter Deutschland: woran Sie einen seriösen Dienst erkennen"
        image={{
          src: "/images/iptv-strem.jpg",
          alt: "Fernseher mit IPTV-App eines Anbieters in Deutschland",
          width: 1920,
          height: 1280,
        }}
        actions={
          <>
            <Button href="/tarife" variant="primary">
              Tarife ansehen
            </Button>
            <Button href={WHATSAPP_TEST_LINK} external variant="whatsapp-white">
              Test anfragen
            </Button>
          </>
        }
      >
        <p>
          Wer einen IPTV Anbieter in Deutschland sucht, findet viele Angebote, die auf den ersten
          Blick gleich aussehen. Die Unterschiede zeigen sich erst bei Preisen, Laufzeiten und der
          Frage, ob Ihnen jemand hilft, wenn das Bild einmal stockt. Diese Seite fasst zusammen,
          worauf Sie vor dem Abo achten sollten.
        </p>
      </PageIntro>

      <Container>
        <Prose>
          <ProseSection title="Checkliste: das sollte ein IPTV Anbieter bieten">
            <ProseList items={checklist} />
            <p>
              Trifft ein Punkt nicht zu, fragen Sie nach. Ein Dienst, der klare Antworten gibt, ist
              meist auch später gut erreichbar.
            </p>
          </ProseSection>

          <ProseSection title="Testen statt versprechen lassen">
            <p>
              Ob IPTV Deutschland bei Ihnen zuverlässig läuft, hängt von Ihrer Leitung, Ihrem Router und
              Ihrem Gerät ab. Kein IPTV Anbieter kann das aus der Ferne garantieren. Ein Testzugang zeigt
              es Ihnen direkt auf dem Fernseher, auf dem Sie später auch schauen.
            </p>
          </ProseSection>

          <ProseSection title="So arbeiten wir als IPTV Anbieter">
            <ProseList
              items={[
                <>
                  Feste Preise je Laufzeit und Geräteanzahl, alle auf der Seite{" "}
                  <TextLink href="/tarife">Tarife</TextLink>.
                </>,
                "Keine automatische Verlängerung: Der Zugang endet mit der Laufzeit.",
                "Testzugang auf Anfrage per WhatsApp.",
                <>
                  Anleitung für Ihr Gerät, siehe <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink>.
                </>,
                <>
                  Bestellung und Hilfe im Chat, Schritt für Schritt auf{" "}
                  <TextLink href="/iptv-bestellen">IPTV bestellen</TextLink> erklärt.
                </>,
              ]}
            />
            <p>
              Mehr über uns lesen Sie auf der Seite <TextLink href="/ueber-uns">Über uns</TextLink>.
            </p>
          </ProseSection>

          <ProseSection title="Fragen zur Wahl des Anbieters">
            <FaqList items={anbieterFaq} />
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
