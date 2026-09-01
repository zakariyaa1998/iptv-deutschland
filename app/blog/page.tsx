import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts, BLOG_NEWS_CATEGORIES, type BlogNewsCategoryId } from "@/lib/blog-posts";

// Editorial section nav — separate from BlogList's own "Alle" + BLOG_CATEGORIES
// tag filter below, which stays untouched. This row links to the two dedicated
// news category pages (infrastructure for future editorial content; see
// docs/seo/keyword-architecture.md).
const NEWS_SECTIONS: BlogNewsCategoryId[] = ["film-serien-news", "sport-news"];

export const metadata: Metadata = {
  title: "Blog – IPTV Wissenshub",
  description:
    "Aktuelle Artikel rund um IPTV Streaming: Einrichtungsanleitungen, Geräte, Vorteile und Branchentrends — verständlich erklärt von Deutschland IPTV.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/blog",
    title: "Blog | Deutschland IPTV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von Deutschland IPTV.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Blog | Deutschland IPTV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von Deutschland IPTV.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Blog", href: "/blog" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="IPTV Wissenshub"
            description="Praktische Anleitungen, Hintergründe und Trends rund um IPTV Streaming — verständlich erklärt."
          />

          <nav aria-label="Rubriken" className="flex w-full flex-wrap justify-center gap-2.5">
            <span
              aria-current="page"
              className="rounded-full border border-aqua bg-aqua px-4 py-2 text-sm font-medium tracking-tight text-black shadow-[0_0_20px_rgba(75,235,30,0.35)]"
            >
              Alle
            </span>
            {NEWS_SECTIONS.map((id) => (
              <Link
                key={id}
                href={`/blog/${id}`}
                className="rounded-full border border-border bg-background-elevated px-4 py-2 text-sm font-medium tracking-tight text-muted transition-all duration-300 ease-out hover:border-aqua/50 hover:text-foreground"
              >
                {BLOG_NEWS_CATEGORIES[id].navLabel}
              </Link>
            ))}
          </nav>

          <BlogList posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
