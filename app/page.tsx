import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StreamingCategories } from "@/components/sections/StreamingCategories";
import { Features } from "@/components/sections/Features";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LatestMovies } from "@/components/sections/LatestMovies";
import { Devices } from "@/components/sections/Devices";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { LiveSports } from "@/components/sections/LiveSports";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV Deutschland – Anbieter für Live-TV & Streaming",
  // Tightened to ~150 characters and folds in the "IPTV Abo" secondary keyword
  // per docs/seo/keyword-architecture.md, without repeating "IPTV Anbieter" —
  // that exact-match term is /iptv-providers' assigned primary keyword.
  description:
    "IPTV Deutschland: Tausende Sender, Filme und Serien in HD, Full HD und 4K in einem IPTV Abo. Stabile Server, faire Preise und persönlicher Support.",
  alternates: {
    canonical: "/",
  },
};

// Organization/WebSite structured data now lives once, sitewide, in app/layout.tsx —
// see the comment there. Keeping a second copy here would be duplicate JSON-LD on
// the homepage specifically, which is exactly the kind of duplicate structured data
// Google's Rich Results guidelines warn against.

export default function Home() {
  return (
    <>
      <Hero />
      <StreamingCategories />
      <PricingPreview />
      <Features />
      <WhyChooseUs />
      <LatestMovies />
      <Devices />
      <LiveSports />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
