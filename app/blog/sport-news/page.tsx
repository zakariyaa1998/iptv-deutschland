import type { Metadata } from "next";
import { NewsCategoryPage } from "@/components/blog/NewsCategoryPage";
import { BLOG_NEWS_CATEGORIES } from "@/lib/blog-posts";

const info = BLOG_NEWS_CATEGORIES["sport-news"];

// Editorial news section — infrastructure only, no articles yet (see
// docs/seo/keyword-architecture.md). SEO intent: Sport News Deutschland,
// Fußball News, Bundesliga News, Sport Streaming. Deliberately does not
// target any existing commercial primary keyword (IPTV Deutschland, IPTV
// kaufen, bester IPTV Anbieter, IPTV Anbieter Deutschland, IPTV Smart TV,
// IPTV Fire TV Stick, IPTV Android TV all stay owned by their existing
// landing pages).
export const metadata: Metadata = {
  title: info.title,
  description: info.metaDescription,
  alternates: {
    canonical: "/blog/sport-news",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/blog/sport-news",
    title: `${info.title} | Deutschland IPTV`,
    description: info.metaDescription,
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: `${info.title} | Deutschland IPTV`,
    description: info.metaDescription,
  },
};

export default function SportNewsPage() {
  return <NewsCategoryPage categoryId="sport-news" />;
}
