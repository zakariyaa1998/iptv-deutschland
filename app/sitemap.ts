import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Only the indexable pages of the 2026-10 relaunch. Legal pages are noindex and
// therefore deliberately left out; every older URL 301-redirects (next.config.ts).
const RELAUNCH_DATE = "2026-10-22";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/tarife", priority: 0.9 },
  { path: "/iptv-bestellen", priority: 0.8 },
  { path: "/iptv-einrichten", priority: 0.8 },
  { path: "/deutsches-fernsehen-iptv", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/fragen-antworten", priority: 0.6 },
  { path: "/kontakt", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: RELAUNCH_DATE,
    changeFrequency: "monthly",
    priority,
  }));
  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
