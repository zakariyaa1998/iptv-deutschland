# Keyword map — deutschland-iptv.online (relaunch 2026-10)

Site-wide main keywords: **IPTV Deutschland** and **IPTV Anbieter Deutschland** (since 2026-11-10). Each appears once near the start and once in the middle of the main text on every content page — not in every paragraph (keyword stuffing). Only the owning page uses a keyword in its title and H1.

| Page | Primary keyword |
|---|---|
| `/` | IPTV Deutschland |
| `/tarife` | IPTV Abo Deutschland |
| `/iptv-anbieter-deutschland` | IPTV Anbieter Deutschland |
| `/ueber-uns` | — (trust page) |
| `/iptv-bestellen` | IPTV bestellen |
| `/iptv-einrichten` | IPTV einrichten |
| `/deutsches-fernsehen-iptv` | deutsches Fernsehen per IPTV |
| `/fragen-antworten` | IPTV Deutschland Fragen |
| `/kontakt` | — |
| `/blog` + articles | long-tail topics (Umzug, Heimnetz, Mediathek) |

Legal pages (`/impressum`, `/privacy-policy`, `/terms`, `/refund-policy`) are `noindex, follow` and not in the sitemap.

## Rules

- Copy must not be shared with the operator's other sites (europeiptv.shop, iptv-stream.shop, franceiptv.shop). Check 5-word phrase overlap before publishing new text.
- Images must be unique to this site (compare md5 hashes).
- No invented numbers (channel counts, test periods, speeds) and no superiority claims ("beste", "bester") — UWG.
- Old URLs are 301-redirected in `next.config.ts`; add a redirect whenever a page is removed or renamed.
