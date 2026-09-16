import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pricingDurations } from "@/lib/plans";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

// English-language landing page (the rest of the site is German — see
// app/layout.tsx's lang="de" and sitewide de-DE JSON-LD). This page targets
// English-speaking IPTV shoppers across Europe rather than the German-market
// keyword set in docs/seo/keyword-architecture.md, so it isn't part of that
// cannibalization map. Known limitation: the root <html lang="de"> isn't
// overridden per-route in this Next.js App Router setup, so this page renders
// under lang="de" despite its English content — flagged for a future i18n
// pass, not fixed here to avoid a much larger restructuring.
export const metadata: Metadata = {
  title: "Europe IPTV – Premium IPTV Provider for Europe",
  description:
    "Europe IPTV: 30,000+ channels across Germany, France, Spain, Italy & the UK. Plans from €30, 4K quality and 24/7 WhatsApp support.",
  keywords: [
    "Europe IPTV",
    "IPTV Europe",
    "European IPTV provider",
    "best IPTV Europe",
    "IPTV Germany France Spain Italy UK",
  ],
  alternates: {
    canonical: "/europe-iptv",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Deutschland IPTV",
    url: "/europe-iptv",
    title: "Europe IPTV – Premium IPTV Provider for Europe | Deutschland IPTV",
    description:
      "Europe IPTV: 30,000+ channels across Germany, France, Spain, Italy & the UK. Plans from €30, 4K quality and 24/7 WhatsApp support.",
    // Europe-iptv1.jpg is a generic, self-branded IPTV UI mockup (no real
    // third-party logos), so — unlike the earlier Netflix-branded photo this
    // page used to use — it's safe to serve as-is to link-preview crawlers.
    images: [{ url: "https://deutschland-iptv.online/images/Europe-iptv1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/Europe-iptv1.jpg"],
    title: "Europe IPTV – Premium IPTV Provider for Europe | Deutschland IPTV",
    description:
      "Europe IPTV: 30,000+ channels across Germany, France, Spain, Italy & the UK. Plans from €30, 4K quality and 24/7 WhatsApp support.",
  },
};

const benefits = [
  {
    title: "Massive Channel Lineup",
    description:
      "30,000+ live channels covering sports, movies, entertainment, news and kids' programming from across Europe and beyond — all included in every plan, not sold as add-ons.",
  },
  {
    title: "True 4K Quality",
    description:
      "Stream in Full HD, Full HD+ and 4K Ultra HD on infrastructure built to stay stable even when a major match kicks off and thousands of viewers tune in at once.",
  },
  {
    title: "Multi-Device Support",
    description:
      "Watch on Smart TV, Fire TV Stick, Android TV, Apple TV, mobile or PC. Switch between devices whenever you like, with no extra setup fees.",
  },
  {
    title: "No Long-Term Contracts",
    description:
      "Pick 6 months, 1 year or 2 years — never a multi-year lock-in. The price you sign up for stays fixed for the whole duration you choose.",
  },
  {
    title: "Real 24/7 Support",
    description:
      "Reach our support team directly on WhatsApp, any time — before you subscribe to ask questions, and long after for setup help or troubleshooting.",
  },
];

const devices = [
  "Smart TV (Samsung, LG and other major brands)",
  "Amazon Fire TV Stick",
  "Android TV & Android boxes",
  "Apple TV",
  "Mobile & tablet (iOS and Android)",
  "PC / Mac via browser or app",
];

// Same source of truth as /plans (lib/plans.ts) — English labels are purely
// presentational; the actual prices come from the shared pricing data, so
// this table can't drift out of sync with the pricing page.
const comparisonMonths: Record<string, number> = { "6-months": 6, "1-year": 12, "2-years": 24 };
const englishDurationLabels: Record<string, string> = {
  "6-months": "6 Months",
  "1-year": "1 Year",
  "2-years": "2 Years",
};
const englishBadges: Record<string, string> = {
  "1-year": "🔥 Most Popular",
  "2-years": "💎 Best Value",
};
const comparisonRows = pricingDurations.filter((duration) => duration.id in comparisonMonths);

const faqItems = [
  {
    question: "What is Europe IPTV?",
    answer:
      "Europe IPTV is a single IPTV subscription from Deutschland IPTV that streams live TV and on-demand content over the internet to viewers across Europe — no satellite dish or cable box required, just a stable internet connection and a compatible device.",
  },
  {
    question: "Which countries and channels does Europe IPTV cover?",
    answer:
      "The lineup covers Germany, France, Spain, Italy, the UK and many other European markets, with local and international channels bundled into the same plan: sports, movies, series, 24-hour news and kids' programming.",
  },
  {
    question: "How much does a Europe IPTV subscription cost?",
    answer:
      "Plans start from €30 for 6 months, with 1-year and 2-year options available at a lower effective monthly price. The full breakdown by duration and device count is on our pricing page.",
  },
  {
    question: "Do I need extra hardware to watch on my TV?",
    answer:
      "Usually not — IPTV runs directly on most modern Smart TVs, phones, tablets and computers. Only for older TVs without their own app store do we recommend a low-cost Fire TV Stick or Android box.",
  },
  {
    question: "Is IPTV legal in Europe?",
    answer:
      "IPTV as a technology is legal — it's simply television delivered over the internet instead of cable or satellite. What matters is that the provider is properly licensed for the content it streams, which is why transparency and real customer support before purchase matter more than the lowest price.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function EuropeIptvPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Europe IPTV", href: "/europe-iptv" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Streaming Across Europe"
            title="Europe IPTV: Premium IPTV Provider for Europe"
            description="One subscription, thousands of channels across the continent — local and international, in Full HD and 4K, with support that actually answers."
          />

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/Europe-iptv1.jpg"
              alt="Europe IPTV streaming interface on a living room Smart TV, showing live channels and trending content"
              fill
              priority
              decoding="async"
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Cable television is losing ground across Europe, and streaming over the internet —
              IPTV — has become the practical alternative for households from Berlin to Barcelona.
              Europe IPTV, brought to you by Deutschland IPTV, gives you one subscription that works
              across the continent: local and international channels from Germany, France, Spain,
              Italy, the UK and beyond, alongside a large library of movies and series on demand.
              Instead of juggling separate regional subscriptions or being locked into a single
              country&apos;s channel package, you get one stable service that follows you — at home or
              travelling within Europe. Every plan includes the same full channel lineup, Full HD
              and 4K quality, and a support team that actually answers on WhatsApp.
            </p>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Why Choose Europe IPTV?</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/Europe-iptv2.jpg"
                  alt="Streaming interface displaying trending shows and a continue-watching row on a Smart TV"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </section>

            <section className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Our Plans &amp; Pricing</h2>
              <p className="text-base leading-relaxed text-muted">
                Every plan — 6 months, 1 year or 2 years — includes the exact same full package:
                30,000+ channels, 70,000+ movies &amp; series on demand, EPG and 24/7 support. You only
                pay for duration and the number of devices, never for individual features.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead className="bg-background-elevated">
                    <tr>
                      <th className="p-4 font-semibold text-foreground">Duration</th>
                      <th className="p-4 font-semibold text-foreground">1 Device</th>
                      <th className="p-4 font-semibold text-foreground">2 Devices</th>
                      <th className="p-4 font-semibold text-foreground">3 Devices</th>
                      <th className="p-4 font-semibold text-foreground">From / month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((duration) => {
                      const tier1 = duration.tiers.find((tier) => tier.devices === 1);
                      const tier2 = duration.tiers.find((tier) => tier.devices === 2);
                      const tier3 = duration.tiers.find((tier) => tier.devices === 3);
                      const months = comparisonMonths[duration.id];
                      const monthlyPrice = tier1 && months ? (tier1.price / months).toFixed(2) : null;

                      return (
                        <tr key={duration.id} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">
                            {englishDurationLabels[duration.id] ?? duration.label}
                            {englishBadges[duration.id] ? (
                              <span className="ml-2 text-xs font-normal text-aqua">
                                {englishBadges[duration.id]}
                              </span>
                            ) : null}
                          </td>
                          <td className="p-4 text-muted">{tier1 ? `€${tier1.price}` : "—"}</td>
                          <td className="p-4 text-muted">{tier2 ? `€${tier2.price}` : "—"}</td>
                          <td className="p-4 text-muted">{tier3 ? `€${tier3.price}` : "—"}</td>
                          <td className="p-4 font-semibold text-aqua">
                            {monthlyPrice ? `€${monthlyPrice}` : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                1-month and 3-month options, plus the full device breakdown, are on our{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  pricing page
                </Link>
                . Have a question about a plan? Message our team directly on{" "}
                <a
                  href={WHATSAPP_DEFAULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aqua underline underline-offset-4"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Supported Countries &amp; Channels
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Europe IPTV covers a growing list of countries, including Germany, France, Spain,
                Italy and the United Kingdom, alongside many other European markets — with more
                channels added regularly. Every plan bundles local and international channels
                together: live sports (major football leagues included), blockbuster movies, popular
                series, round-the-clock news channels and dedicated kids&apos; programming. Whether you&apos;re
                following domestic league football, want reliable international news, or just prefer
                one subscription that covers entertainment from several countries at once, the channel
                lineup is built to cover it.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Compatible Devices</h2>
              <ul className="grid gap-3 text-base leading-relaxed text-muted sm:grid-cols-2">
                {devices.map((device) => (
                  <li key={device} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{device}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Looking for a Country-Specific Guide?</h2>
              <p className="text-sm leading-relaxed text-muted">
                Shopping specifically for IPTV in Germany? See our in-depth{" "}
                <Link href="/iptv-anbieter-deutschland" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter Deutschland
                </Link>{" "}
                guide (in German) for the local trust criteria, legal overview and pricing table. For a
                broader look at what separates a reliable IPTV provider from an unreliable one, our{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>{" "}
                criteria guide (also in German) applies just as well across the rest of Europe.
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      {/* Custom English CTA — the shared <ContactCTA/> component's copy is
          German, which would mix languages on an otherwise all-English page. */}
      <section className="py-20 sm:py-28">
        <Container>
          <ScrollReveal className="bg-noise relative overflow-hidden rounded-3xl border border-aqua/30 bg-background-elevated px-6 py-16 text-center sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aqua/20 blur-[100px]"
            />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to Start Streaming Across Europe?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Message us on WhatsApp now and get a personal plan recommendation within minutes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href={WHATSAPP_DEFAULT_LINK}
                  external
                  variant="whatsapp-white"
                  className="px-8 py-4 text-base"
                >
                  Chat on WhatsApp
                </Button>
                <Button href="/plans" variant="outline" className="px-8 py-4 text-base">
                  View Pricing
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
