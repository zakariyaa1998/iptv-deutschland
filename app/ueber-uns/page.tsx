import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { Prose, ProseList, ProseSection, TextLink } from "@/components/content/Prose";
import { socialMetadata, SUPPORT_EMAIL } from "@/lib/site";

// Trust page. Supports "IPTV Anbieter Deutschland" without competing with
// /iptv-anbieter-deutschland for it in the title or H1.
const title = "Über uns – wer hinter Deutschland IPTV steht";
const description =
  "Über Deutschland IPTV: wie wir als IPTV Anbieter für Deutschland arbeiten, wofür wir stehen und wie Sie uns erreichen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ueber-uns" },
  ...socialMetadata("/ueber-uns", title, description),
};

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns", href: "/ueber-uns" }]} />

      <PageIntro
        eyebrow="Über uns"
        title="Über Deutschland IPTV"
        image={{
          src: "/images/premium-home-cinema.jpg",
          alt: "Wohnzimmer mit großem Fernseher für IPTV Deutschland",
          width: 2096,
          height: 1184,
        }}
        actions={
          <Button href="/kontakt" variant="primary">
            Kontakt aufnehmen
          </Button>
        }
      >
        <p>
          Deutschland IPTV ist ein IPTV Anbieter für Zuschauer in Deutschland, die Fernsehen über die
          Internetleitung schauen möchten, ohne Schüssel, Receiver oder Kabelvertrag. Wir kümmern uns
          um den Zugang und um die Frage, wie er auf Ihrem Gerät läuft.
        </p>
      </PageIntro>

      <Container>
        <Prose>
          <ProseSection title="Wofür wir stehen">
            <ProseList
              items={[
                "Einfache Tarife: Laufzeit und Geräteanzahl wählen, sonst nichts.",
                "Keine automatische Verlängerung und keine Folgekosten.",
                "Persönliche Hilfe auf Deutsch statt Ticketsystem.",
                "Ein Test vor dem Kauf, damit Sie nicht ins Blaue bezahlen.",
              ]}
            />
          </ProseSection>

          <ProseSection title="Wie wir arbeiten">
            <p>
              Bestellung, Zahlung und Hilfe laufen bei IPTV Deutschland im persönlichen Chat. Sie
              schreiben uns, welches Gerät Sie nutzen, und bekommen eine Anleitung, die dazu passt. Wenn
              etwas nicht klappt, reicht ein Screenshot, und wir sehen gemeinsam nach.
            </p>
            <p>
              Wie die Bestellung genau abläuft, steht auf <TextLink href="/iptv-bestellen">IPTV bestellen</TextLink>.
              Worauf Sie bei einem IPTV Anbieter allgemein achten sollten, erklärt die Seite{" "}
              <TextLink href="/iptv-anbieter-deutschland">IPTV Anbieter Deutschland</TextLink>.
            </p>
          </ProseSection>

          <ProseSection title="So erreichen Sie uns">
            <p>
              Am schnellsten per WhatsApp, für längere Anliegen per E-Mail an{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-aqua underline underline-offset-4">
                {SUPPORT_EMAIL}
              </a>
              . Alle Wege finden Sie auf der Seite <TextLink href="/kontakt">Kontakt</TextLink>, die
              Anbieterangaben im <TextLink href="/impressum">Impressum</TextLink>.
            </p>
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
