import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import {
  DevicesOverview,
  HowItWorks,
  PriceOverview,
  Programmes,
  Requirements,
  WhatIsIptv,
} from "@/components/home/HomeSections";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/content/FaqList";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { faqCategories } from "@/lib/faq-data";
import { socialMetadata } from "@/lib/site";

// Primary keyword: "IPTV Deutschland". Every other page owns its own term
// (see docs/seo/keyword-map.md), so the homepage does not target them.
const title = "IPTV Deutschland – Fernsehen über das Internet";
const description =
  "IPTV Deutschland: Live-TV, Filme und Serien über Ihre Internetleitung auf Smart TV, Fire TV Stick oder Smartphone. Laufzeiten ab 1 Monat, Bestellung per WhatsApp.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Deutschland IPTV` },
  description,
  alternates: { canonical: "/" },
  ...socialMetadata("/", title, description),
};

const homeFaq = faqCategories[0].items.concat(faqCategories[1].items.slice(0, 2));

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhatIsIptv />
      <HowItWorks />
      <Programmes />
      <DevicesOverview />
      <PriceOverview />
      <Requirements />

      <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Fragen zu IPTV Deutschland
          </h2>
          <FaqList items={homeFaq} />
          <Link href="/fragen-antworten" className="w-fit text-sm font-semibold text-aqua underline underline-offset-4">
            Alle Fragen und Antworten →
          </Link>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
