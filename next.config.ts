import type { NextConfig } from "next";

// Domain canonicalization (www vs. apex) and HTTPS enforcement are handled at the
// Cloudflare/Vercel edge, not here — a redirect added at this level fights with
// those and produces a redirect loop (ERR_TOO_MANY_REDIRECTS).
const nextConfig: NextConfig = {
  // 2026-10 relaunch: live pages are /, /tarife, /iptv-bestellen, /iptv-einrichten,
  // /deutsches-fernsehen-iptv, /fragen-antworten, /kontakt, /blog and the legal pages.
  // Every URL from earlier site versions redirects permanently to the closest live
  // page. Keep this list flat — every destination must be a live page, never
  // another redirect's source. Old blog slugs are listed one by one (no catch-all)
  // so that new /blog/<slug> articles are never redirected away.
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
      // Remaining posts from earlier site versions → new blog index.
      ["/blog/benefits-of-iptv", "/blog"],
      ["/blog/best-iptv-apps-2026", "/blog"],
      ["/blog/best-iptv-devices-2026", "/blog"],
      ["/blog/best-iptv-providers-2026", "/blog"],
      ["/blog/beste-iptv-anbieter-2026-vergleich", "/blog"],
      ["/blog/beste-vpn-fuer-iptv", "/blog"],
      ["/blog/bundesliga-dazn-sky-iptv-alternative", "/blog"],
      ["/blog/film-serien-news", "/blog"],
      ["/blog/iptv-beste-geraete-deutschland-test", "/blog"],
      ["/blog/iptv-deutschland-2026", "/blog"],
      ["/blog/iptv-guide-2026", "/blog"],
      ["/blog/iptv-in-deutschland-guide", "/blog"],
      ["/blog/iptv-legal-guide", "/blog"],
      ["/blog/iptv-vpn-deutschland-ip-sperren-vermeiden", "/blog"],
      ["/blog/iptv-vs-netflix-disney-plus-kosten", "/blog"],
      ["/blog/sport-news", "/blog"],
      ["/blog/sport-streaming-4k-deutschland-guide", "/blog"],
      ["/blog/sports-streaming-4k-guide", "/blog"],
      ["/blog/streaming-trends-2026", "/blog"],
      ["/blog/streaming-trends-deutschland", "/blog"],
      ["/blog/tivimate-vs-ibo-player", "/blog"],
      ["/blog/tivimate-vs-ibo-player-beste-app", "/blog"],
      ["/blog/vorteile-von-iptv", "/blog"],
      ["/blog/what-is-iptv-guide", "/blog"],
    ];

    return [...renamed, ...removed, ...oldBlog].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
