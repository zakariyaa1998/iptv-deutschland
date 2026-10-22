import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { FaqList } from "@/components/content/FaqList";
import { Prose, ProseList, ProseSection, Steps, TextLink } from "@/components/content/Prose";
import { WHATSAPP_ORDER_LINK } from "@/lib/whatsapp";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV bestellen".
const title = "IPTV bestellen – so läuft die Bestellung ab";
const description =
  "IPTV bestellen bei Deutschland IPTV: Tarif wählen, per WhatsApp anfragen, Zugangsdaten erhalten. Der Ablauf Schritt für Schritt, mit Hinweisen zu Zahlung und Freischaltung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-bestellen" },
  ...socialMetadata("/iptv-bestellen", title, description),
};

const orderFaq = [
  {
    question: "Muss ich ein Kundenkonto anlegen?",
    answer:
      "Nein. Die gesamte Bestellung läuft im WhatsApp-Chat. Sie brauchen weder Passwort noch Registrierung auf dieser Website.",
  },
  {
    question: "Welche Angaben braucht ihr von mir?",
    answer:
      "Nur den gewünschten Tarif und das Gerät, auf dem Sie schauen möchten. So können wir Ihnen gleich die passende Anleitung mitschicken.",
  },
  {
    question: "Wie lange dauert es bis zur Freischaltung?",
    answer:
      "Die Zugangsdaten senden wir, sobald die Zahlung bei uns angekommen ist. Wie schnell das geht, hängt vom gewählten Zahlungsweg ab.",
  },
];

export default function IptvBestellenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV bestellen", href: "/iptv-bestellen" }]} />

      <PageIntro
        eyebrow="Bestellung"
        title="IPTV bestellen: vom Tarif bis zu den Zugangsdaten"
        image={{
          src: "/images/iptv-bestellen-fernbedienung.jpg",
          alt: "Smartphone mit Bestellübersicht neben einer TV-Fernbedienung",
          width: 1920,
          height: 1280,
        }}
        actions={
          <>
            <Button href="/tarife" variant="primary">
              Zu den Tarifen
            </Button>
            <Button href={WHATSAPP_ORDER_LINK} external variant="whatsapp-white">
              Direkt per WhatsApp
            </Button>
          </>
        }
      >
        <p>
          Bei uns gibt es keinen Warenkorb und kein Bestellformular. Sie schreiben uns, wir
          antworten — und am Ende haben Sie Ihre Zugangsdaten im Chat. Auf dieser Seite sehen Sie,
          was dabei genau passiert.
        </p>
      </PageIntro>

      <Container>
        <Prose>
          <ProseSection title="Der Ablauf in vier Schritten">
            <Steps
              items={[
                {
                  title: "Tarif auf der Tarifseite auswählen",
                  text: "Laufzeit oben wählen, dann die Karte mit der passenden Geräteanzahl.",
                },
                {
                  title: "WhatsApp-Nachricht abschicken",
                  text: "Der Bestell-Button öffnet WhatsApp mit einer fertigen Nachricht, in der Ihr Tarif schon steht. Gerne ergänzen Sie, welches Gerät Sie nutzen.",
                },
                {
                  title: "Zahlung abschließen",
                  text: "Wir antworten mit den möglichen Zahlungswegen und dem Betrag. Es fallen keine weiteren Kosten an.",
                },
                {
                  title: "Zugangsdaten und Anleitung erhalten",
                  text: "Ist die Zahlung da, schicken wir Daten und Geräte-Anleitung in denselben Chat.",
                },
              ]}
            />
          </ProseSection>

          <ProseSection title="Bevor Sie IPTV bestellen: kurz prüfen">
            <ProseList
              items={[
                "Läuft auf Ihrem Gerät eine IPTV-App? Bei Smart TVs, Sticks und Smartphones ist das fast immer der Fall.",
                "Ist Ihre Internetverbindung stabil? Für den Fernseher ist ein LAN-Kabel zum Router die sicherste Wahl.",
                "Wie viele Bildschirme sollen gleichzeitig laufen? Danach richtet sich die Geräteanzahl im Tarif.",
              ]}
            />
            <p>
              Unsicher bei einem Punkt? Schreiben Sie uns vor der Bestellung — wir sagen Ihnen
              ehrlich, ob Ihr Gerät geeignet ist.
            </p>
          </ProseSection>

          <ProseSection title="Nach der Bestellung">
            <p>
              Mit den Zugangsdaten öffnen Sie die empfohlene App und tragen die Daten ein. Wie das
              auf Fernseher, Stick oder Handy aussieht, zeigt die Seite{" "}
              <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink>. Kommen Sie an einer
              Stelle nicht weiter, schicken Sie uns einfach einen Screenshot.
            </p>
          </ProseSection>

          <ProseSection title="Häufige Fragen zur Bestellung">
            <FaqList items={orderFaq} />
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
