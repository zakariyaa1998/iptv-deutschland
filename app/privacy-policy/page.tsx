import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix): the root layout's title.template
  // ("%s | Deutschland IPTV") appends the brand once. Hardcoding the suffix
  // here too previously produced a doubled "| Deutschland IPTV | Deutschland IPTV"
  // in the rendered <title> tag. openGraph.title/twitter.title below are unaffected
  // by the template (they're independent fields), so those keep the suffix.
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Deutschland IPTV: welche Daten wir erheben, wie wir sie verwenden, mit wem wir sie teilen und welche Rechte Sie nach der DSGVO haben.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/privacy-policy",
    title: "Datenschutzerklärung | Deutschland IPTV",
    description: "Welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie nach der DSGVO haben.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Datenschutzerklärung | Deutschland IPTV",
    description: "Welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie nach der DSGVO haben.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "Datenschutzerklärung", href: "/privacy-policy" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Rechtliches"
            title="Datenschutzerklärung"
            description="Der Schutz Ihrer persönlichen Daten ist uns bei Deutschland IPTV (deutschland-iptv.online) wichtig. Diese Erklärung informiert Sie, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) zustehen."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-xs text-muted">Stand: 16. August 2026</p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Verantwortlicher</h2>
              <p className="text-base leading-relaxed text-muted">
                Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist Deutschland IPTV
                (deutschland-iptv.online). Bei Fragen zum Datenschutz erreichen Sie uns unter{" "}
                <a href="mailto:zerotv.support@gmail.com" className="text-aqua underline underline-offset-4">
                  zerotv.support@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welche Daten wir erheben
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Erhoben werden ausschließlich die Daten, die für die Bearbeitung Ihrer Anfrage oder Ihres Abos bei
                Deutschland IPTV notwendig sind:
              </p>
              <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Kontaktdaten:</strong> Name und E-Mail-Adresse, die Sie
                    uns über unser Kontaktformular oder per WhatsApp mitteilen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Nachrichteninhalt:</strong> der Text Ihrer Anfrage über das
                    Kontaktformular oder WhatsApp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Zahlungsinformationen:</strong> im Rahmen der individuellen
                    Bestellabwicklung, die wir Ihnen persönlich mitteilen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Technische Daten:</strong> IP-Adresse, Browsertyp und
                    Zugriffszeiten, die beim Besuch von deutschland-iptv.online automatisch in Server-Logs anfallen
                  </span>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie wir Ihre Daten verwenden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ihre Daten dienen ausschließlich dazu, Ihre Anfragen zu beantworten, Ihr Abo bei Deutschland IPTV
                einzurichten und zu verwalten, unsere Website technisch sicher und funktionsfähig zu betreiben
                sowie gesetzlichen Pflichten nachzukommen. Eine Nutzung zu Werbezwecken Dritter findet nicht statt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Mit wem wir Daten teilen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Weitergegeben werden Ihre Daten ausschließlich an Dienstleister, die uns beim Betrieb von
                deutschland-iptv.online und bei der Kommunikation mit Ihnen unterstützen:
              </p>
              <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>Resend, zum Versand von Nachrichten aus unserem Kontaktformular</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>Vercel, für Hosting und datensparsame, anonymisierte Website-Analyse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    WhatsApp (Meta), wenn Sie uns über WhatsApp kontaktieren — hier gelten zusätzlich die
                    Datenschutzbestimmungen von WhatsApp/Meta
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    Zahlungsdienstleister, sofern im Rahmen der individuellen Zahlungsabwicklung Ihres Abos
                    erforderlich
                  </span>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Ein Verkauf Ihrer Daten an Dritte findet nicht statt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Rechtsgrundlage der Verarbeitung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Verarbeitung erfolgt zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1
                lit. b DSGVO), zur Wahrung berechtigter Interessen an einem sicheren und funktionsfähigen
                Websitebetrieb (Art. 6 Abs. 1 lit. f DSGVO) sowie, soweit erforderlich, auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Ihre Rechte nach der DSGVO
              </h2>
              <p className="text-base leading-relaxed text-muted">Nutzern von Deutschland IPTV stehen die folgenden Rechte zu:</p>
              <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Auskunft</strong> über die zu Ihrer Person gespeicherten
                    Daten (Art. 15 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Löschung</strong> Ihrer Daten, soweit keine gesetzliche
                    Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Widerspruch</strong> gegen die Verarbeitung Ihrer Daten
                    (Art. 21 DSGVO)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>
                    <strong className="text-foreground">Beschwerde</strong> bei einer Datenschutz-Aufsichtsbehörde
                    (Art. 77 DSGVO)
                  </span>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Für die Ausübung dieser Rechte reicht eine formlose Nachricht an{" "}
                <a href="mailto:zerotv.support@gmail.com" className="text-aqua underline underline-offset-4">
                  zerotv.support@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Speicherdauer</h2>
              <p className="text-base leading-relaxed text-muted">
                Daten werden bei Deutschland IPTV nur so lange gespeichert, wie es für den jeweiligen Zweck
                erforderlich ist — etwa für die Dauer Ihres Abos zuzüglich der anschließenden Bearbeitung von
                Rückfragen. Abrechnungsrelevante Unterlagen bewahren wir entsprechend den gesetzlichen handels- und
                steuerrechtlichen Aufbewahrungsfristen von bis zu zehn Jahren auf. Anschließend werden die Daten
                gelöscht oder anonymisiert.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Cookies und Tracking
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Deutschland-iptv.online verwendet keine Marketing- oder Werbe-Cookies. Für die Website-Analyse
                setzen wir Vercel Analytics ein, das ohne Cookies arbeitet und lediglich anonymisierte, aggregierte
                Zugriffszahlen erfasst — eine Identifizierung einzelner Besucher findet dabei nicht statt. Sollten
                künftig zusätzliche Cookies zum Einsatz kommen, die eine Einwilligung erfordern, informieren wir
                Sie darüber und holen Ihre Zustimmung ein.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Datensicherheit</h2>
              <p className="text-base leading-relaxed text-muted">
                Alle Daten werden verschlüsselt über TLS/SSL übertragen; Zugriff auf Ihre Daten erhalten
                ausschließlich Personen, die ihn zur Bearbeitung Ihrer Anfrage tatsächlich benötigen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Diese Datenschutzerklärung wird angepasst, sobald sich unsere Datenverarbeitung oder die
                Rechtslage ändert. Die jeweils aktuelle Fassung finden Sie stets unter deutschland-iptv.online/privacy-policy.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">
                Kontakt für Datenschutzanfragen
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                Für Fragen zu dieser Datenschutzerklärung oder zur Ausübung Ihrer Rechte erreichen Sie uns unter{" "}
                <a href="mailto:zerotv.support@gmail.com" className="text-aqua underline underline-offset-4">
                  zerotv.support@gmail.com
                </a>{" "}
                oder über unsere{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Kontaktseite
                </Link>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
