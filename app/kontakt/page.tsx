import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { TextLink } from "@/components/content/Prose";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";
import { SUPPORT_EMAIL, socialMetadata } from "@/lib/site";

const title = "Kontakt zu IPTV Deutschland";
const description =
  "Kontakt zu IPTV Deutschland per WhatsApp, E-Mail oder Formular. Fragen zu Tarifen, Bestellung oder Einrichtung beantworten wir persönlich.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kontakt" },
  ...socialMetadata("/kontakt", title, description),
};

const contactChannels = [
  {
    label: "WhatsApp",
    value: "+971 50 574 3472",
    href: WHATSAPP_DEFAULT_LINK,
    external: true,
    description: "Für Bestellungen und schnelle Fragen. Screenshots können Sie direkt mitschicken.",
  },
  {
    label: "E-Mail",
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
    external: false,
    description: "Für längere Anliegen, die Sie lieber ausführlich schildern möchten.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Kontakt", href: "/kontakt" }]} />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Kontakt</span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Kontakt zu IPTV Deutschland
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Sie haben eine Frage zu IPTV Deutschland, zu einem Tarif oder zur Einrichtung? Nennen Sie
              uns am besten gleich Ihr Gerät und Ihre Frage. Dann können wir ohne Rückfragen
              weiterhelfen.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Viele Antworten finden Sie auch ohne Nachricht: unter{" "}
              <TextLink href="/fragen-antworten">Fragen & Antworten</TextLink>, in der Anleitung{" "}
              <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink> und auf der Seite{" "}
              <TextLink href="/iptv-anbieter-deutschland">IPTV Anbieter Deutschland</TextLink>, wenn
              Sie gerade Angebote vergleichen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-6">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-7">
                  <span className="text-sm font-semibold uppercase tracking-wide text-aqua">{channel.label}</span>
                  <p className="text-sm leading-relaxed text-muted">{channel.description}</p>
                  <Button
                    href={channel.href}
                    external={channel.external}
                    variant={channel.label === "WhatsApp" ? "whatsapp" : "outline"}
                    className="w-fit"
                  >
                    {channel.value}
                  </Button>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
