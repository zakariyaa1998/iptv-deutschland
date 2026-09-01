import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import {
  BLOG_NEWS_CATEGORIES,
  blogPosts,
  getNewsCategoryPosts,
  type BlogNewsCategoryId,
} from "@/lib/blog-posts";

const NEWS_NAV: { id: BlogNewsCategoryId; href: string }[] = [
  { id: "film-serien-news", href: "/blog/film-serien-news" },
  { id: "sport-news", href: "/blog/sport-news" },
];

/**
 * Shared renderer for the editorial news category landing pages
 * (/blog/film-serien-news, /blog/sport-news). Each route file supplies only
 * its own `metadata` export; the page body — breadcrumb, H1, intro, post
 * grid or empty state — comes from here so the two pages stay identical in
 * structure and match the existing /blog page's design system.
 */
export function NewsCategoryPage({ categoryId }: { categoryId: BlogNewsCategoryId }) {
  const info = BLOG_NEWS_CATEGORIES[categoryId];
  const posts = getNewsCategoryPosts(categoryId, blogPosts);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: info.label, href: `/blog/${categoryId}` },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading as="h1" eyebrow="Blog" title={info.h1} description={info.intro} />

          <div className="flex w-full flex-wrap justify-center gap-2.5">
            <Link
              href="/blog"
              className="rounded-full border border-border bg-background-elevated px-4 py-2 text-sm font-medium tracking-tight text-muted transition-all duration-300 ease-out hover:border-aqua/50 hover:text-foreground"
            >
              Alle
            </Link>
            {NEWS_NAV.map((nav) => {
              const isActive = nav.id === categoryId;
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 text-sm font-medium tracking-tight transition-all duration-300 ease-out ${
                    isActive
                      ? "border-aqua bg-aqua text-black shadow-[0_0_20px_rgba(75,235,30,0.35)]"
                      : "border-border bg-background-elevated text-muted hover:border-aqua/50 hover:text-foreground"
                  }`}
                >
                  {BLOG_NEWS_CATEGORIES[nav.id].navLabel}
                </Link>
              );
            })}
          </div>

          {posts.length > 0 ? (
            <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={((index % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-5 transition-colors hover:border-aqua/50"
                  >
                    <BlogThumbnail post={post} className="aspect-[16/10] w-full" priority={index < 3} />
                    <div className="flex flex-col gap-3 px-1 pb-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted">
                        <span className="rounded-full bg-aqua/10 px-2.5 py-1 font-semibold text-aqua">
                          {post.category}
                        </span>
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          · {post.readingTimeMinutes} Min. Lesezeit
                        </time>
                      </div>
                      <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-aqua">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-sm text-muted">{info.emptyState}</p>
          )}
        </Container>
      </section>
    </>
  );
}
