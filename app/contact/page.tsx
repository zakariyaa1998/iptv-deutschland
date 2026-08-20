import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix) — see app/plans/page.tsx for why.
  title: "Kontakt",
  description:
    "Kontaktieren Sie Deutschland IPTV über WhatsApp oder E-Mail. Unser Support-Team hilft Ihnen schnell und persönlich bei jeder Frage rund um Ihr IPTV Abo.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/contact",
    title: "Kontakt | Deutschland IPTV",
    description:
      "Kontaktieren Sie Deutschland IPTV über WhatsApp oder E-Mail. Unser Support-Team hilft Ihnen schnell und persönlich.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Kontakt | Deutschland IPTV",
    description:
      "Kontaktieren Sie Deutschland IPTV über WhatsApp oder E-Mail. Unser Support-Team hilft Ihnen schnell und persönlich.",
  },
};

const contactChannels = [
  {
    label: "WhatsApp",
    value: "+971 50 574 3472",
    href: WHATSAPP_DEFAULT_LINK,
    external: true,
    description: "Schnellste Antwortzeit — ideal für Bestellungen und dringende Fragen.",
  },
  {
    label: "E-Mail",
    value: "zerotv.support@gmail.com",
    href: "mailto:zerotv.support@gmail.com",
    external: false,
    description: "Für ausführliche Anfragen, oder wenn Sie lieber alles in Ruhe aufschreiben möchten.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Kontakt", href: "/contact" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Kontakt"
            title="Wir sind für Sie da"
            description="Ob Frage zur Einrichtung, zum passenden Tarif oder zu Ihrer Bestellung — unser Team antwortet schnell und persönlich."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-6">
              {contactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-7"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-aqua">
                    {channel.label}
                  </span>
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
