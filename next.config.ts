import type { NextConfig } from "next";

// Domain canonicalization (www vs. apex) and HTTPS enforcement are handled at the
// Cloudflare/Vercel edge, not here — a redirect added at this level fights with
// those and produces a redirect loop (ERR_TOO_MANY_REDIRECTS).
const nextConfig: NextConfig = {
  // Permanent redirects from the old German-language URLs to their new English
  // equivalents, put in place when the site moved from a German-market focus to
  // a global English-language identity. Keeps existing inbound/indexed links
  // (search results, backlinks, bookmarks) working instead of 404ing.
  async redirects() {
    return [
      { source: "/iptv-deutschland", destination: "/iptv-service", permanent: true },
      { source: "/beste-iptv-deutschland", destination: "/best-iptv-service", permanent: true },
      { source: "/iptv-anbieter", destination: "/iptv-anbieter-deutschland", permanent: true },
      // 2026-09 slug migration: /iptv-providers renamed to /iptv-anbieter-deutschland
      // (exact-match slug for its primary keyword). Preserves indexing signals /
      // inbound links on the old URL instead of 404ing.
      { source: "/iptv-providers", destination: "/iptv-anbieter-deutschland", permanent: true },
      {
        source: "/blog/iptv-in-deutschland-guide",
        destination: "/blog/what-is-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-geraete-einrichten-anleitung",
        destination: "/blog/iptv-device-setup-guide",
        permanent: true,
      },
      { source: "/blog/smart-tv-iptv-nutzen", destination: "/blog/iptv-smart-tv-guide", permanent: true },
      { source: "/blog/vorteile-von-iptv", destination: "/blog/benefits-of-iptv", permanent: true },
      {
        source: "/blog/streaming-trends-deutschland",
        destination: "/blog/streaming-trends-2026",
        permanent: true,
      },
      {
        source: "/blog/iptv-beste-geraete-deutschland-test",
        destination: "/blog/best-iptv-devices-2026",
        permanent: true,
      },
      {
        source: "/blog/iptv-vpn-deutschland-ip-sperren-vermeiden",
        destination: "/blog/fix-iptv-buffering-vpn-dns",
        permanent: true,
      },
      {
        source: "/blog/tivimate-vs-ibo-player-beste-app",
        destination: "/blog/tivimate-vs-ibo-player",
        permanent: true,
      },
      {
        source: "/blog/sport-streaming-4k-deutschland-guide",
        destination: "/blog/sports-streaming-4k-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-probleme-loesungen-anleitung",
        destination: "/blog/iptv-troubleshooting-guide",
        permanent: true,
      },
      { source: "/blog/iptv-deutschland-2026", destination: "/blog/iptv-guide-2026", permanent: true },
      {
        source: "/blog/iptv-ohne-kabel-fernsehen-deutschland",
        destination: "/blog/iptv-vs-cable-tv",
        permanent: true,
      },
      {
        source: "/blog/iptv-fire-tv-stick-installieren",
        destination: "/blog/iptv-fire-tv-stick-setup-guide",
        permanent: true,
      },
      {
        source: "/blog/beste-iptv-anbieter-2026-vergleich",
        destination: "/blog/best-iptv-providers-2026",
        permanent: true,
      },
      { source: "/blog/iptv-kaufen-deutschland", destination: "/blog/how-to-buy-iptv", permanent: true },
      { source: "/blog/iptv-sender-deutschland", destination: "/blog/iptv-channels-guide", permanent: true },
    ];
  },
};

export default nextConfig;
