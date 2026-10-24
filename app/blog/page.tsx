import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { blogPosts } from "@/lib/blog";
import { socialMetadata } from "@/lib/site";

const title = "Blog – Tipps rund um Fernsehen per Internet";
const description =
  "Ratgeber zu Fernsehen per Internet: Kabelfernsehen-Alternative, deutsches Fernsehen im Ausland und WLAN für IPTV. Verständlich erklärt von Deutschland IPTV.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  ...socialMetadata("/blog", title, description),
};

const dateFormat = new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Blog", href: "/blog" }]} />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Blog</span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tipps rund um Fernsehen per Internet
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Ausführliche Ratgeber zu den Fragen, die uns am häufigsten erreichen: vom Ende des Kabelanschlusses bis zum Fernsehen im Urlaub.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-colors hover:border-aqua/60"
              >
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={1920}
                  height={1280}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <time dateTime={post.publishedAt} className="text-xs text-muted">
                    {dateFormat.format(new Date(post.publishedAt))}
                  </time>
                  <h2 className="text-lg font-semibold leading-snug text-foreground group-hover:text-aqua">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{post.description}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-aqua">Weiterlesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
