import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_NAME, SUPPORT_EMAIL, noindexRobots, socialMetadata } from "@/lib/site";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

// Anbieterkennzeichnung (§ 5 DDG), data given by the owner on 2026-11-10.
// TODO: § 5 DDG requires a full postal address — add street, house number and
// PLZ once the owner provides them. Never publish invented data here.
const PROVIDER_NAME = "Europe Digital";
const PROVIDER_ADDRESS = ["München", "Deutschland"];

const title = "Impressum";
const description = "Impressum von Deutschland IPTV: Anbieterangaben und Kontakt nach § 5 DDG.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/impressum" },
  robots: noindexRobots,
  ...socialMetadata("/impressum", title, description),
};

const H2 = "text-2xl font-semibold tracking-tight text-foreground";
const P = "text-base leading-relaxed text-muted";

export default function ImpressumPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Impressum", href: "/impressum" }]} />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Impressum</h1>

            <section className="flex flex-col gap-3">
              <h2 className={H2}>Angaben gemäß § 5 DDG</h2>
              <p className={P}>
                {SITE_NAME}
                <br />
                {PROVIDER_NAME}
                {PROVIDER_ADDRESS.map((line) => (
                  <span key={line}>
                    <br />
                    {line}
                  </span>
                ))}
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={H2}>Kontakt</h2>
              <p className={P}>
                E-Mail:{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-aqua underline underline-offset-4">
                  {SUPPORT_EMAIL}
                </a>
                <br />
                WhatsApp:{" "}
                <a href={WHATSAPP_DEFAULT_LINK} target="_blank" rel="noopener noreferrer" className="text-aqua underline underline-offset-4">
                  +971 50 574 3472
                </a>
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={H2}>Verantwortlich für den Inhalt</h2>
              <p className={P}>{PROVIDER_NAME}, Anschrift wie oben.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={H2}>Verbraucherstreitbeilegung</h2>
              <p className={P}>
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className={H2}>Haftung für Links</h2>
              <p className={P}>
                Unsere Seiten enthalten Links zu externen Websites, auf deren Inhalte wir keinen Einfluss
                haben. Für diese Inhalte ist der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
