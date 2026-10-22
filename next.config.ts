import type { NextConfig } from "next";

// Domain canonicalization (www vs. apex) and HTTPS enforcement are handled at the
// Cloudflare/Vercel edge, not here — a redirect added at this level fights with
// those and produces a redirect loop (ERR_TOO_MANY_REDIRECTS).
const nextConfig: NextConfig = {
  // 2026-10 relaunch: live pages are /, /tarife, /iptv-bestellen, /iptv-einrichten,
  // /deutsches-fernsehen-iptv, /fragen-antworten, /kontakt and the legal pages.
  // Every URL from earlier site versions redirects permanently to the closest live
  // page. Keep this list flat — every destination must be a live page, never
  // another redirect's source. Specific /blog/<slug> rules must stay above the
  // /blog/:slug catch-all, because the first matching rule wins.
  async redirects() {
    const renamed: [string, string][] = [
      ["/plans", "/tarife"],
      ["/faq", "/fragen-antworten"],
      ["/contact", "/kontakt"],
      ["/logo", "/images/logo.png"],
    ];

    const removed: [string, string][] = [
      ["/about", "/"],
      ["/iptv-deutschland", "/"],
      ["/iptv-germany", "/"],
      ["/europe-iptv", "/"],
      ["/best-iptv-service", "/"],
      ["/beste-iptv-deutschland", "/"],
      ["/iptv-anbieter", "/"],
      ["/iptv-anbieter-deutschland", "/"],
      ["/iptv-providers", "/"],
      ["/iptv-service", "/iptv-bestellen"],
      ["/iptv-smart-tv", "/iptv-einrichten"],
      ["/iptv-fire-tv-stick", "/iptv-einrichten"],
      ["/iptv-android-tv", "/iptv-einrichten"],
      ["/iptv-smarters-pro", "/iptv-einrichten"],
    ];

    const oldBlog: [string, string][] = [
      ["/blog/iptv-device-setup-guide", "/iptv-einrichten"],
      ["/blog/iptv-geraete-einrichten-anleitung", "/iptv-einrichten"],
      ["/blog/iptv-smart-tv-guide", "/iptv-einrichten"],
      ["/blog/smart-tv-iptv-nutzen", "/iptv-einrichten"],
      ["/blog/iptv-fire-tv-stick-setup-guide", "/iptv-einrichten"],
      ["/blog/iptv-fire-tv-stick-installieren", "/iptv-einrichten"],
      ["/blog/iptv-android-tv-einrichten", "/iptv-einrichten"],
      ["/blog/iptv-apple-tv", "/iptv-einrichten"],
      ["/blog/m3u-playlist-xtream-codes", "/iptv-einrichten"],
      ["/blog/iptv-troubleshooting-guide", "/fragen-antworten"],
      ["/blog/iptv-probleme-loesungen-anleitung", "/fragen-antworten"],
      ["/blog/fix-iptv-buffering-vpn-dns", "/fragen-antworten"],
      ["/blog/iptv-channels-guide", "/deutsches-fernsehen-iptv"],
      ["/blog/iptv-sender-deutschland", "/deutsches-fernsehen-iptv"],
      ["/blog/gez-rundfunkbeitrag-iptv", "/deutsches-fernsehen-iptv"],
      ["/blog/iptv-vs-cable-tv", "/deutsches-fernsehen-iptv"],
      ["/blog/iptv-ohne-kabel-fernsehen-deutschland", "/deutsches-fernsehen-iptv"],
      ["/blog/how-to-buy-iptv", "/iptv-bestellen"],
      ["/blog/iptv-kaufen-deutschland", "/iptv-bestellen"],
      ["/blog/iptv-test-guide", "/iptv-bestellen"],
      ["/blog", "/"],
      ["/blog/:slug*", "/"],
    ];

    return [...renamed, ...removed, ...oldBlog].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
