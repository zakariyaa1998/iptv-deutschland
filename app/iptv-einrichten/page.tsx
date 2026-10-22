import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { Prose, ProseList, ProseSection, Steps, TextLink } from "@/components/content/Prose";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV einrichten". Replaces the former per-device pages
// (/iptv-smart-tv, /iptv-fire-tv-stick, /iptv-android-tv, /iptv-smarters-pro).
const title = "IPTV einrichten – Anleitung für TV, Stick und Handy";
const description =
  "IPTV einrichten auf Smart TV, Fire TV Stick, Android TV, Apple TV, Smartphone und PC: was Sie brauchen, wie die Zugangsdaten eingetragen werden und was bei Problemen hilft.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-einrichten" },
  ...socialMetadata("/iptv-einrichten", title, description),
};

const deviceNotes = [
  {
    name: "Samsung und LG Smart TV",
    text: "Sie installieren die App über den Store, der auf dem Fernseher vorinstalliert ist. Nach dem ersten Start zeigt sie meist einen Code oder eine Geräteadresse an. Diese Angabe brauchen wir, um Ihren Zugang mit der App zu verbinden.",
  },
  {
    name: "Fire TV Stick",
    text: "Die App wird über den Amazon Appstore oder per Download-Code installiert. Für einen Download-Code müssen Sie in den Einstellungen die Installation aus unbekannten Quellen erlauben. Die Anleitung dazu bekommen Sie mit den Zugangsdaten.",
  },
  {
    name: "Android TV und Google TV",
    text: "Die App finden Sie im Google Play Store auf dem Fernseher oder der Box. Danach tragen Sie die Zugangsdaten direkt in der App ein.",
  },
  {
    name: "Apple TV, iPhone und iPad",
    text: "Im App Store gibt es mehrere IPTV-Player. Wir nennen Ihnen eine App, die mit Ihrem Zugang funktioniert.",
  },
  {
    name: "Android-Smartphone und Tablet",
    text: "Die App aus dem Play Store installieren und anmelden. Unterwegs läuft die Wiedergabe über WLAN oder mobile Daten. Achten Sie dabei auf Ihr Datenvolumen.",
  },
  {
    name: "PC und Mac",
    text: "Am Computer nutzen Sie einen Player für Windows oder macOS. Die Anleitung erhalten Sie auf Wunsch zusammen mit den Zugangsdaten.",
  },
];

export default function IptvEinrichtenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV einrichten", href: "/iptv-einrichten" }]} />

      <PageIntro
        eyebrow="Einrichtung"
        title="IPTV einrichten: so kommt das Programm auf Ihr Gerät"
        image={{
          src: "/images/iptv-geraete-stick-box.jpg",
          alt: "Streaming-Stick und TV-Boxen zum IPTV einrichten",
          width: 1920,
          height: 1280,
        }}
      >
        <p>
          Die Einrichtung läuft auf fast jedem Gerät gleich ab: App installieren, Zugangsdaten
          eintragen, Senderliste laden. Unterschiede gibt es vor allem dabei, woher die App kommt.
          Hier finden Sie den Ablauf und Hinweise zu den gängigen Geräten.
        </p>
      </PageIntro>

      <Container>
        <Prose>
          <ProseSection title="Was Sie vorab brauchen">
            <ProseList
              items={[
                "Ein Gerät mit Internetzugang: Smart TV, Streaming-Stick, TV-Box, Smartphone, Tablet oder Computer.",
                "Ihre Zugangsdaten. Sie bekommen sie nach der Bestellung per WhatsApp.",
                "Eine stabile Verbindung zum Router, am Fernseher am besten per LAN-Kabel.",
              ]}
            />
          </ProseSection>

          <ProseSection title="Der allgemeine Ablauf">
            <Steps
              items={[
                { title: "App installieren", text: "Die von uns genannte App auf das Gerät holen." },
                {
                  title: "Zugangsdaten eintragen",
                  text: "Je nach App geben Sie Benutzername, Passwort und Serveradresse ein oder fügen einen Playlist-Link ein.",
                },
                {
                  title: "Senderliste und Programmführer laden",
                  text: "Der erste Abruf aller Inhalte dauert etwas länger als spätere Starts.",
                },
                { title: "Favoriten anlegen", text: "Häufig genutzte Programme markieren, damit Sie sie schnell wiederfinden." },
              ]}
            />
          </ProseSection>

          <ProseSection title="Hinweise je Gerät">
            <div className="flex flex-col gap-4">
              {deviceNotes.map((device) => (
                <div key={device.name} className="rounded-2xl border border-border bg-background-elevated p-5">
                  <h3 className="text-base font-semibold text-foreground">{device.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{device.text}</p>
                </div>
              ))}
            </div>
          </ProseSection>

          <ProseSection title="Wenn etwas nicht klappt">
            <ProseList
              items={[
                "Zugangsdaten noch einmal Zeichen für Zeichen prüfen, vor allem Groß- und Kleinschreibung.",
                "App ganz schließen und neu öffnen, danach die Senderliste aktualisieren.",
                "Router und Gerät neu starten, wenn das Bild hängt oder gar nicht lädt.",
                "Einen eventuell aktiven VPN-Dienst testweise ausschalten.",
              ]}
            />
            <p>
              Hilft nichts davon, schicken Sie uns einen Screenshot per WhatsApp. Weitere Antworten
              finden Sie unter <TextLink href="/fragen-antworten">Fragen & Antworten</TextLink>.
              Noch ohne Zugang? Hier geht es zu den <TextLink href="/tarife">Tarifen</TextLink>.
            </p>
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
