import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Prose, ProseList, TextLink } from "@/components/content/Prose";
import { FaqList } from "@/components/content/FaqList";
import { blogPosts, getBlogPost, readingMinutes } from "@/lib/blog";
import { SITE_NAME, SITE_URL, socialMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  const social = socialMetadata(path, post.metaTitle, post.description);
  const images = [{ url: `${SITE_URL}${post.image.src}`, width: 1920, height: 1280 }];

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      ...social.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images,
    },
    twitter: { ...social.twitter, images: images.map((image) => image.url) },
  };
}

const dateFormat = new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.image.src}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    keywords: post.keyword,
    inLanguage: "de-DE",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <Container>
          <header className="mx-auto flex w-full max-w-3xl flex-col gap-5 pt-14 sm:pt-20">
            <p className="flex flex-wrap gap-x-3 text-sm text-muted">
              <time dateTime={post.publishedAt}>{dateFormat.format(new Date(post.publishedAt))}</time>
              <span aria-hidden>·</span>
              <span>{readingMinutes(post)} Min. Lesezeit</span>
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{post.intro}</p>
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={1920}
                height={1280}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full object-cover"
              />
            </div>
          </header>

          <Prose>
            <nav aria-label="Inhalt" className="rounded-2xl border border-border bg-background-elevated p-6">
              <p className="text-sm font-semibold text-foreground">Inhalt</p>
              <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-sm text-muted">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:text-aqua">
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#fragen" className="hover:text-aqua">
                    Häufige Fragen
                  </a>
                </li>
              </ol>
            </nav>

            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="flex scroll-mt-24 flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? <ProseList items={section.list} /> : null}
                </div>
              </section>
            ))}

            <section id="fragen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Häufige Fragen: {post.keyword}
              </h2>
              <FaqList items={post.faq} />
            </section>

            <p className="border-t border-border pt-8 text-base text-muted">
              Weiter geht es hier: <TextLink href={post.related.href}>{post.related.label}</TextLink>
            </p>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-foreground">Weitere Artikel</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {blogPosts
                  .filter((other) => other.slug !== post.slug)
                  .map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/blog/${other.slug}`}
                        className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-5 transition-colors hover:border-aqua/60"
                      >
                        <span className="text-base font-semibold text-foreground">{other.title}</span>
                        <span className="text-sm text-muted">{other.description}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          </Prose>
        </Container>
      </article>

      <ContactCTA />
    </>
  );
}
