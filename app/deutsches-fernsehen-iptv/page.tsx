import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageIntro } from "@/components/content/PageIntro";
import { FaqList } from "@/components/content/FaqList";
import { Prose, ProseList, ProseSection, TextLink } from "@/components/content/Prose";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "deutsches Fernsehen per IPTV".
const title = "Deutsches Fernsehen per IPTV – Empfang ohne Schüssel";
const description =
  "Deutsches Fernsehen per IPTV: Live-Programm, Sport, Filme und Serien über die Internetleitung statt über Satellit oder Kabel. Was sich ändert und was Sie wissen sollten.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/deutsches-fernsehen-iptv" },
  ...socialMetadata("/deutsches-fernsehen-iptv", title, description),
};

const comparison = [
  { aspect: "Empfang", classic: "Schüssel, Antenne oder Kabeldose", iptv: "Internetleitung" },
  { aspect: "Zusatzgeräte", classic: "Receiver oder Kabelbox", iptv: "App auf vorhandenem Gerät" },
  { aspect: "Mehrere Räume", classic: "Eigene Leitung je Fernseher", iptv: "Jedes Gerät im WLAN oder LAN" },
  { aspect: "Unterwegs", classic: "In der Regel nicht möglich", iptv: "Auf Smartphone oder Tablet" },
  { aspect: "Filme & Serien", classic: "Getrennte Dienste", iptv: "In derselben App" },
];

const tvFaq = [
  {
    question: "Entfällt mit IPTV der Rundfunkbeitrag?",
    answer:
      "Nein. Der Rundfunkbeitrag wird in Deutschland pro Wohnung erhoben, unabhängig davon, wie oder ob Sie fernsehen. Ein IPTV Abo ändert daran nichts.",
  },
  {
    question: "Kann ich meinen Satelliten- oder Kabelanschluss kündigen?",
    answer:
      "Das entscheiden Sie selbst. Viele behalten den alten Anschluss zunächst und kündigen erst, wenn IPTV im Alltag zuverlässig läuft. Prüfen Sie dabei die Kündigungsfristen Ihres bisherigen Anbieters.",
  },
  {
    question: "Gibt es einen Programmführer wie beim normalen Fernsehen?",
    answer:
      "Ja. Die Apps zeigen einen elektronischen Programmführer (EPG) mit der aktuellen Sendung und den folgenden Beiträgen eines Programms.",
  },
];

export default function DeutschesFernsehenPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Deutsches Fernsehen per IPTV", href: "/deutsches-fernsehen-iptv" },
        ]}
      />

      <PageIntro
        eyebrow="Fernsehen"
        title="Deutsches Fernsehen per IPTV: das gewohnte Programm, ein neuer Weg"
        image={{
          src: "/images/iptv-deutschland-familie.jpg",
          alt: "Familie schaut deutsches Fernsehen per IPTV im Wohnzimmer",
          width: 1920,
          height: 1280,
        }}
        actions={
          <Button href="/tarife" variant="primary">
            Tarife ansehen
          </Button>
        }
      >
        <p>
          Nachrichten am Abend, die Samstagsshow, das Spiel am Wochenende: Am Programm ändert sich
          mit IPTV wenig, wohl aber am Empfang. Statt über Satellit oder Kabel kommt das Signal über
          das Internet. Diese Seite erklärt, was das im Alltag bedeutet.
        </p>
      </PageIntro>

      <Container>
        <Prose>
          <ProseSection title="Satellit und Kabel im Vergleich zu IPTV">
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-background-elevated text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold"></th>
                    <th className="px-4 py-3 font-semibold">Satellit / Kabel</th>
                    <th className="px-4 py-3 font-semibold text-aqua">IPTV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparison.map((row) => (
                    <tr key={row.aspect}>
                      <th className="px-4 py-3 font-semibold text-foreground">{row.aspect}</th>
                      <td className="px-4 py-3">{row.classic}</td>
                      <td className="px-4 py-3 text-foreground">{row.iptv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ProseSection>

          <ProseSection title="Welche Programmarten Sie erwarten">
            <ProseList
              items={[
                "Nachrichten und Informationsprogramme",
                "Unterhaltung, Shows und Serien im laufenden Programm",
                "Sport live, von Fußball bis Motorsport",
                "Dokumentationen und Wissensformate",
                "Kinderprogramm",
                "Filme und Serien zum Abrufen in der Mediathek",
              ]}
            />
            <p>
              Welche Programme genau in der Senderliste stehen, sehen Sie nach dem Einloggen in der
              App. Sie suchen ein bestimmtes Programm? Fragen Sie uns vor der Bestellung im WhatsApp-Chat.
            </p>
          </ProseSection>

          <ProseSection title="Sport im Wohnzimmer">
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/iptv-fussball-wohnzimmer.jpg"
                alt="Freunde schauen ein Fußballspiel per IPTV auf dem Fernseher"
                width={1920}
                height={1280}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full object-cover"
              />
            </div>
            <p>
              Gerade bei Live-Sport merkt man, ob die Verbindung trägt. Für ein ruhiges Bild hilft es,
              den Fernseher per Kabel mit dem Router zu verbinden und große Downloads während des
              Spiels zu pausieren. Mehr dazu unter{" "}
              <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink>.
            </p>
          </ProseSection>

          <ProseSection title="Deutsches Fernsehen im Urlaub oder Ausland">
            <p>
              Da der Zugang über das Internet läuft, ist er nicht an eine Satellitenschüssel oder eine
              bestimmte Wohnung gebunden. Viele nutzen das, um im Urlaub, im Ferienhaus oder an einem
              Zweitwohnsitz das gewohnte Programm zu sehen. Wie gut das funktioniert, hängt von der
              Internetverbindung vor Ort ab.
            </p>
          </ProseSection>

          <ProseSection title="Fragen zum Umstieg">
            <FaqList items={tvFaq} />
          </ProseSection>
        </Prose>
      </Container>

      <ContactCTA />
    </>
  );
}
