import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import { FormattedText } from "@/components/blog/FormattedText";
import { TopicCluster } from "@/components/blog/TopicCluster";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const SITE_URL = "https://deutschland-iptv.online";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Subsection (H3) anchors are namespaced under their parent section slug so two
// subsections with the same heading text in different sections never collide.
function subsectionId(sectionHeading: string, subHeading: string) {
  return `${slugify(sectionHeading)}--${slugify(subHeading)}`;
}

const relatedLandingPages: Record<string, { href: string; label: string }> = {
  "iptv-guide-2026": { href: "/iptv-service", label: "IPTV Service" },
  "what-is-iptv-guide": { href: "/iptv-service", label: "IPTV Service" },
  "iptv-device-setup-guide": { href: "/iptv-fire-tv-stick", label: "IPTV Fire TV Stick" },
  "iptv-smart-tv-guide": { href: "/iptv-smart-tv", label: "IPTV Smart TV" },
  "benefits-of-iptv": { href: "/best-iptv-service", label: "Bester IPTV Anbieter" },
  "streaming-trends-2026": { href: "/iptv-service", label: "IPTV Service" },
  "best-iptv-devices-2026": { href: "/iptv-android-tv", label: "IPTV Android TV" },
  // Labels below realigned to each landing page's current primary keyword
  // (see docs/seo/keyword-architecture.md) — /iptv-providers' primary is
  // "IPTV Anbieter Deutschland", not the bare "IPTV Anbieter".
  "fix-iptv-buffering-vpn-dns": { href: "/iptv-providers", label: "IPTV Anbieter Deutschland" },
  "tivimate-vs-ibo-player": { href: "/iptv-smart-tv", label: "IPTV Smart TV" },
  "sports-streaming-4k-guide": { href: "/best-iptv-service", label: "Bester IPTV Anbieter" },
  "iptv-troubleshooting-guide": { href: "/iptv-providers", label: "IPTV Anbieter Deutschland" },
  "iptv-vs-cable-tv": { href: "/iptv-service", label: "IPTV Service" },
  "iptv-fire-tv-stick-setup-guide": { href: "/iptv-fire-tv-stick", label: "IPTV Fire TV Stick" },
  "best-iptv-providers-2026": { href: "/iptv-providers", label: "IPTV Anbieter Deutschland" },
  "how-to-buy-iptv": { href: "/iptv-providers", label: "IPTV Anbieter Deutschland" },
  "iptv-channels-guide": { href: "/iptv-service", label: "IPTV Service" },
  "iptv-test-guide": { href: "/best-iptv-service", label: "Bester IPTV Anbieter" },
  "iptv-legal-guide": { href: "/iptv-providers", label: "IPTV Anbieter Deutschland" },
  "best-iptv-apps-2026": { href: "/iptv-android-tv", label: "IPTV Android TV" },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogImageUrl = `${SITE_URL}${post.image?.src ?? "/opengraph-image"}`;
  // The dynamic fallback route is a known-fixed 1200×630 PNG. Real uploaded post images
  // have no guaranteed dimensions on disk, so we don't assert width/height for those and
  // let crawlers/social platforms probe the file directly instead of trusting a guess.
  const ogImageDimensions = post.image ? {} : { width: 1200, height: 630 };

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    keywords: post.keywords ?? [post.category],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "de_DE",
      siteName: "Deutschland IPTV",
      url: `/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [SITE_URL],
      section: post.category,
      images: [
        {
          url: ogImageUrl,
          ...ogImageDimensions,
          alt: post.image?.alt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [`${SITE_URL}${post.image?.src ?? "/opengraph-image"}`],
    inLanguage: "de-DE",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    ...(post.keywords ? { keywords: post.keywords.join(", ") } : {}),
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: "Deutschland IPTV",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Deutschland IPTV",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const faqJsonLd =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const relatedPosts = getRelatedPosts(post, blogPosts, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <header className="flex flex-col gap-6">
            <time dateTime={post.publishedAt} className="text-xs uppercase tracking-wide text-muted">
              {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTimeMinutes} Min. Lesezeit
            </time>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <BlogThumbnail post={post} className="aspect-[21/9] w-full" priority />
          </header>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              {post.intro.map((paragraph, index) => (
                <p key={index}>
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </div>

            {post.tldr && post.tldr.length > 0 ? (
              <section
                aria-labelledby="tldr-heading"
                className="flex flex-col gap-3 rounded-3xl border border-aqua/30 bg-aqua/5 p-7"
              >
                <h2 id="tldr-heading" className="text-lg font-semibold text-foreground">
                  Kurzzusammenfassung
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {post.tldr.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <CheckIcon className="text-aqua" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <TopicCluster post={post} allPosts={blogPosts} />

            {post.toc ? (
              <nav
                aria-label="Inhaltsverzeichnis"
                className="flex flex-col gap-3 rounded-3xl border border-border bg-background-elevated p-7"
              >
                <h2 className="text-lg font-semibold text-foreground">Inhaltsverzeichnis</h2>
                <ol className="flex flex-col gap-2 text-sm">
                  {post.sections.map((section) => (
                    <li key={section.heading} className="flex flex-col gap-1.5">
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="text-aqua underline underline-offset-4 hover:text-aqua-dim"
                      >
                        {section.heading}
                      </a>
                      {section.subsections && section.subsections.length > 0 ? (
                        <ol className="flex flex-col gap-1.5 pl-5 text-muted">
                          {section.subsections.map((sub) => (
                            <li key={sub.heading}>
                              <a
                                href={`#${subsectionId(section.heading, sub.heading)}`}
                                className="underline underline-offset-4 hover:text-aqua"
                              >
                                {sub.heading}
                              </a>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </li>
                  ))}
                  <li>
                    <a
                      href="#faq"
                      className="text-aqua underline underline-offset-4 hover:text-aqua-dim"
                    >
                      Häufig gestellte Fragen (FAQ)
                    </a>
                  </li>
                </ol>
              </nav>
            ) : null}

            {post.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2
                  id={slugify(section.heading)}
                  className="scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
                >
                  {section.heading}
                </h2>
                {section.body.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-muted">
                    <FormattedText text={paragraph} />
                  </p>
                ))}
                {section.list ? (
                  <ul className="flex flex-col gap-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                        <CheckIcon className="text-aqua" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? (
                  <div className="flex flex-col gap-2">
                    <div className="w-full overflow-x-auto rounded-2xl border border-border">
                      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-background-elevated">
                            {section.table.headers.map((header) => (
                              <th
                                key={header}
                                scope="col"
                                className="border-b border-border px-4 py-3 font-semibold text-foreground"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="odd:bg-background even:bg-background-elevated/40">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border-b border-border px-4 py-3 text-muted">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {section.table.caption ? (
                      <p className="text-xs text-muted/70">{section.table.caption}</p>
                    ) : null}
                  </div>
                ) : null}
                {section.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      fetchPriority="auto"
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="flex flex-col gap-3 pl-1">
                    <h3
                      id={subsectionId(section.heading, sub.heading)}
                      className="scroll-mt-24 text-lg font-semibold text-foreground"
                    >
                      {sub.heading}
                    </h3>
                    {sub.body.map((paragraph, index) => (
                      <p key={index} className="text-base leading-relaxed text-muted">
                        <FormattedText text={paragraph} />
                      </p>
                    ))}
                    {sub.list ? (
                      <ul className="flex flex-col gap-2.5">
                        {sub.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                            <CheckIcon className="text-aqua" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Fazit</h2>
              {post.conclusion.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted">
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </section>

            <section
              id="faq"
              className="scroll-mt-24 flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen</h2>
              <div className="flex flex-col gap-4">
                {post.faq.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {post.sources && post.sources.length > 0 ? (
              <section className="flex flex-col gap-3 rounded-3xl border border-border bg-background-elevated/60 p-7">
                <h2 className="text-lg font-semibold text-foreground">Quellen &amp; weiterführende Links</h2>
                <ul className="flex flex-col gap-2">
                  {post.sources.map((source) => (
                    <li key={source.url} className="text-sm">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aqua underline underline-offset-4 hover:text-aqua-dim"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <p className="text-sm leading-relaxed text-muted">
              Bereit für Premium-Streaming? Werfen Sie einen Blick auf unsere{" "}
              <Link href="/plans" className="text-aqua underline underline-offset-4">
                Tarife
              </Link>{" "}
              oder besuchen Sie unsere{" "}
              <Link href="/faq" className="text-aqua underline underline-offset-4">
                FAQ-Seite
              </Link>{" "}
              für weitere Antworten. Bei individuellen Fragen erreichen Sie uns jederzeit über unsere{" "}
              <Link href="/contact" className="text-aqua underline underline-offset-4">
                Kontaktseite
              </Link>
              , und in unserem{" "}
              <Link href="/blog" className="text-aqua underline underline-offset-4">
                Blog
              </Link>{" "}
              finden Sie weitere hilfreiche IPTV Artikel.
              {relatedLandingPages[post.slug] ? (
                <>
                  {" "}
                  Mehr zu diesem Thema erfahren Sie auf{" "}
                  <Link
                    href={relatedLandingPages[post.slug].href}
                    className="text-aqua underline underline-offset-4"
                  >
                    {relatedLandingPages[post.slug].label}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </div>

          {relatedPosts.length > 0 ? (
            <nav
              aria-labelledby="related-articles-heading"
              className="mx-auto flex w-full max-w-3xl flex-col gap-5 border-t border-border pt-10"
            >
              <h2 id="related-articles-heading" className="text-lg font-semibold text-foreground">
                Ähnliche Artikel
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-2xl border border-border bg-background-elevated p-5 text-sm font-medium text-foreground transition-colors hover:border-aqua/50 hover:text-aqua"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
        </Container>
      </article>

      <ContactCTA />
    </>
  );
}
