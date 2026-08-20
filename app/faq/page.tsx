import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { faqCategories } from "@/lib/faq-data";

export const metadata: Metadata = {
  // Plain title (no manual brand suffix) — see app/plans/page.tsx for why.
  title: "IPTV FAQ – Häufige Fragen",
  description:
    "Antworten auf häufige Fragen zu Deutschland IPTV: Abo, unterstützte Geräte, Installation, Zahlung, Laufzeiten und Problemlösungen.",
  keywords: ["IPTV FAQ", "IPTV Fragen", "IPTV Hilfe"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/faq",
    title: "IPTV FAQ | Deutschland IPTV",
    description: "Antworten auf häufige Fragen zu Abo, Geräten, Installation und Support.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "IPTV FAQ | Deutschland IPTV",
    description: "Antworten auf häufige Fragen zu Abo, Geräten, Installation und Support.",
  },
};

const allFaqItems = faqCategories.flatMap((category) => category.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "FAQ", href: "/faq" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="IPTV FAQ: Häufig gestellte Fragen"
            description="Finden Sie Antworten zu Abo, Geräten, Zahlung und Support. Ihre Frage ist nicht dabei? Kontaktieren Sie uns direkt."
          />

          <p className="max-w-3xl text-center text-sm leading-relaxed text-muted">
            Diese FAQ beantwortet die häufigsten Fragen zu Deutschland IPTV direkt. Für einen
            vollständigen Überblick über unsere Tarife besuchen Sie{" "}
            <Link href="/plans" className="text-aqua underline underline-offset-4">
              IPTV Preise
            </Link>
            , und für Einrichtungsanleitungen auf Ihrem Gerät{" "}
            <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
              IPTV Smart TV
            </Link>
            ,{" "}
            <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
              IPTV Fire TV Stick
            </Link>{" "}
            oder{" "}
            <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
              IPTV Android TV
            </Link>
            .
          </p>

          <div className="flex w-full max-w-3xl flex-col gap-12">
            {faqCategories.map((category) => (
              <div key={category.category} className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                <div className="flex flex-col gap-4">
                  {category.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-border bg-background-elevated p-6 open:border-aqua/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                        {item.question}
                        <span className="shrink-0 text-aqua transition-transform duration-300 group-open:rotate-45">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
