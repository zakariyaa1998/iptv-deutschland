import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = "https://deutschland-iptv.online";

export default function sitemap(): MetadataRoute.Sitemap {
  // Applied to every static route that has no more specific known last-edit date,
  // so `lastmod` is always present and consistent instead of silently falling back
  // to an implicit per-build value on some routes but not others.
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: buildDate, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/plans`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/faq`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: buildDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/iptv-service`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/best-iptv-service`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/iptv-providers`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/iptv-smart-tv`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/iptv-fire-tv-stick`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/iptv-android-tv`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/terms`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/refund-policy`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    // Pillar pages are the hub of their topic cluster and receive the most
    // internal links, so they should be crawled/refreshed most often.
    priority: post.isPillar ? 0.75 : 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
