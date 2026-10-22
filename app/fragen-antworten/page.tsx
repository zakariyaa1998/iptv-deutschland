import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FaqList } from "@/components/content/FaqList";
import { TextLink } from "@/components/content/Prose";
import { allFaqItems, faqCategories } from "@/lib/faq-data";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV Deutschland Fragen".
const title = "Fragen & Antworten zu IPTV Deutschland";
const description =
  "Antworten auf häufige Fragen zu IPTV Deutschland: Funktionsweise, Bestellung, Tarife, Geräte, Einrichtung und Hilfe bei Bild- oder Senderproblemen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fragen-antworten" },
  ...socialMetadata("/fragen-antworten", title, description),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FragenAntwortenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Fragen & Antworten", href: "/fragen-antworten" },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Hilfe</span>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                IPTV Deutschland: Fragen und Antworten
              </h1>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Hier finden Sie kurze Antworten zu den Themen, nach denen wir am häufigsten gefragt
                werden. Ausführlicher wird es auf den Seiten{" "}
                <TextLink href="/iptv-bestellen">IPTV bestellen</TextLink> und{" "}
                <TextLink href="/iptv-einrichten">IPTV einrichten</TextLink>.
              </p>
            </div>

            {faqCategories.map((category) => (
              <div key={category.category} className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                <FaqList items={category.items} withJsonLd={false} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
