# Deutschland IPTV — Keyword-Targeting Architecture (DE Market)

Reference document. Produced as a planning artifact — **no page content, metadata, or URLs were changed
when this was written.** It defines, for every existing important URL, one clear primary search intent
and a full keyword set, so that the eventual content-alignment pass has a precise target instead of
guessing. Supersedes the informal keyword notes in the Phase 1 SEO audit for anything that conflicts.

Legend: **Funnel stage** = TOFU (top/awareness) · MOFU (middle/consideration) · BOFU (bottom/decision-transactional).

---

## 0. Hierarchy at a glance

```
TIER 0 — Brand root
  /

TIER 1 — Commercial landing pages (money pages; feed /plans)
  /iptv-service          /iptv-providers        /best-iptv-service
  /iptv-smart-tv         /iptv-fire-tv-stick    /iptv-android-tv
  /plans  (conversion page)

TIER 2 — Blog pillars (cluster hubs; feed Tier 1)
  grundlagen → /blog/iptv-guide-2026
  geraete    → /blog/iptv-device-setup-guide
  anbieter   → /blog/best-iptv-providers-2026

TIER 3 — Blog spokes (long-tail; feed their pillar + matching Tier 1 page)
  grundlagen → what-is-iptv-guide · benefits-of-iptv · streaming-trends-2026
               · iptv-vs-cable-tv · iptv-channels-guide
  geraete    → iptv-smart-tv-guide · best-iptv-devices-2026
               · tivimate-vs-ibo-player · iptv-fire-tv-stick-setup-guide
  anbieter   → fix-iptv-buffering-vpn-dns · sports-streaming-4k-guide
               · iptv-troubleshooting-guide · how-to-buy-iptv
```

Traffic flow is intentionally one-directional up the funnel: **spoke → pillar → Tier‑1 landing page → `/plans`**,
with `/faq` and `/contact` as cross-cutting trust/conversion assists reachable from anywhere.

---

## 1. TIER 0 — Homepage

### `/`
- **Primary keyword:** IPTV Deutschland
- **Search intent:** Navigational / broad commercial (brand + category entry point)
- **Secondary keywords:** IPTV Anbieter Deutschland, IPTV Abo, IPTV Streaming, IPTV Live TV
- **Long-tail supporting:** "IPTV Deutschland Anbieter", "IPTV Deutschland Abo kaufen", "bestes IPTV Deutschland"
- **Semantic/related terms:** Live-TV, Streaming ohne Kabel, VOD-Bibliothek, EPG, 4K Streaming
- **Funnel stage:** TOFU→MOFU (brand entry, routes visitors onward)
- **Should receive internal links from:** every page, via sitewide header/footer (already in place)
- **Should provide internal links to:** `/plans` (primary CTA), `/iptv-service`, `/best-iptv-service`, `/iptv-providers`, `/blog`
- **Must NOT compete with:** "bester IPTV Anbieter" (→ `/best-iptv-service`), "IPTV kaufen" (→ `/blog/how-to-buy-iptv`), "IPTV Sender" (→ `/blog/iptv-channels-guide`)
- **⚠ Current code issue:** `app/layout.tsx`'s sitewide `metadata.keywords` array already includes `"bester IPTV Anbieter"`, `"IPTV kaufen"`, and `"IPTV Sender"` — all three belong to other pages per this architecture. Flagged for correction in the next content/metadata pass; not changed now.

---

## 2. TIER 1 — Commercial landing pages

### `/iptv-service`
- **Primary keyword:** IPTV Service
- **Search intent:** Informational-commercial hybrid — "what is this service and how does it work," brand-anchored (distinguishes it from the neutral educational blog take on the same base question)
- **Secondary keywords:** IPTV Dienst, IPTV ohne Kabel, TV über Internet schauen
- **Long-tail supporting:** "was ist ein IPTV Service", "IPTV Dienst Deutschland", "IPTV Service Vergleich"
- **Semantic/related terms:** Streaming-Technologie, Zugangsdaten, Playlist-URL, EPG, VOD
- **Funnel stage:** TOFU→MOFU
- **Should receive internal links from:** `/` , `/blog/iptv-guide-2026`, `/blog/what-is-iptv-guide`, `/blog/iptv-vs-cable-tv`, device landing pages
- **Should provide internal links to:** `/blog/iptv-vs-cable-tv`, `/iptv-providers`, `/best-iptv-service`, all three device pages, `/plans`
- **Must NOT compete with:** "was ist IPTV" (→ `/blog/what-is-iptv-guide`), "IPTV 2026 / IPTV Kosten" (→ `/blog/iptv-guide-2026`)

### `/iptv-providers`
- **Primary keyword:** IPTV Anbieter Deutschland
- **Search intent:** Commercial investigation / trust validation — "is this provider legitimate"
- **Secondary keywords:** IPTV Anbieter, IPTV Bewertungen, seriöser IPTV Anbieter
- **Long-tail supporting:** "seriöse IPTV Anbieter erkennen", "IPTV Anbieter Warnzeichen", "vertrauenswürdiger IPTV Anbieter Deutschland"
- **Semantic/related terms:** Support, Transparenz, Vertragslaufzeit, Zahlungssicherheit
- **Funnel stage:** MOFU
- **Should receive internal links from:** `/`, `/iptv-service`, `/best-iptv-service`, `/blog/best-iptv-providers-2026`, `/blog/how-to-buy-iptv`, `/blog/iptv-troubleshooting-guide`
- **Should provide internal links to:** `/best-iptv-service`, `/blog/best-iptv-providers-2026`, `/plans`, `/faq`, `/contact`
- **Must NOT compete with:** "bester IPTV Anbieter" (→ `/best-iptv-service`), "beste IPTV Anbieter 2026" (→ `/blog/best-iptv-providers-2026`)
- **Owns the bare head term "IPTV Anbieter"** among the three anbieter-cluster pages — see Cannibalization Map §2.

### `/best-iptv-service`
- **Primary keyword:** bester IPTV Anbieter
- **Search intent:** Commercial investigation — quality-criteria comparison, evergreen (not year-dated)
- **Secondary keywords:** beste IPTV Anbieter, IPTV Anbieter Vergleich, Premium IPTV
- **Long-tail supporting:** "woran erkennt man den besten IPTV Anbieter", "IPTV Qualitätsmerkmale", "bester IPTV Anbieter Deutschland"
- **Semantic/related terms:** Serverstabilität, 4K-Qualität, Kundenservice, Preis-Leistung
- **Funnel stage:** MOFU→BOFU
- **Should receive internal links from:** `/`, `/iptv-service`, `/iptv-providers`, `/blog/best-iptv-providers-2026`
- **Should provide internal links to:** `/plans`, `/iptv-providers`, `/blog/best-iptv-providers-2026`
- **Must NOT compete with:** "IPTV Anbieter Deutschland" (→ `/iptv-providers`), "beste IPTV Anbieter 2026" (→ blog pillar, which owns the dated/deepest comparison)

### `/iptv-smart-tv`
- **Primary keyword:** IPTV Smart TV
- **Search intent:** Transactional/commercial — device compatibility + setup overview, brand-anchored
- **Secondary keywords:** IPTV Samsung TV, IPTV LG TV, IPTV für Smart TV
- **Long-tail supporting:** "IPTV auf Samsung TV einrichten", "IPTV LG webOS App", "IPTV Smart TV ohne Zusatzgerät"
- **Semantic/related terms:** Tizen, webOS, App Store, LAN-Verbindung
- **Funnel stage:** MOFU→BOFU
- **Should receive internal links from:** `/`, `/iptv-service`, `/blog/iptv-device-setup-guide`, `/blog/iptv-smart-tv-guide`, `/iptv-fire-tv-stick`, `/iptv-android-tv`
- **Should provide internal links to:** `/blog/iptv-smart-tv-guide` (deep how-to), `/plans`, `/iptv-fire-tv-stick`, `/iptv-android-tv`
- **Must NOT compete with:** "IPTV auf Smart TV nutzen" (→ `/blog/iptv-smart-tv-guide`, the how-to deep-dive)

### `/iptv-fire-tv-stick`
- **Primary keyword:** IPTV Fire TV Stick
- **Search intent:** Transactional/commercial — device compatibility + setup overview
- **Secondary keywords:** IPTV Firestick, IPTV App Fire TV Stick
- **Long-tail supporting:** "IPTV auf Fire TV Stick installieren", "beste IPTV App für Fire TV Stick", "Fire TV Stick 4K IPTV"
- **Semantic/related terms:** Downloader-App, Sideloading, Alexa-Fernbedienung, HDMI
- **Funnel stage:** MOFU→BOFU
- **Should receive internal links from:** `/`, `/iptv-service`, `/blog/iptv-device-setup-guide`, `/blog/iptv-fire-tv-stick-setup-guide`, `/blog/best-iptv-devices-2026`, `/iptv-smart-tv`, `/iptv-android-tv`
- **Should provide internal links to:** `/blog/iptv-fire-tv-stick-setup-guide` (deep how-to), `/plans`, `/iptv-smart-tv`, `/iptv-android-tv`
- **Must NOT compete with:** "IPTV Fire TV Stick installieren" (→ `/blog/iptv-fire-tv-stick-setup-guide`), "beste IPTV Geräte 2026" (→ `/blog/best-iptv-devices-2026`, which compares devices rather than servicing one)

### `/iptv-android-tv`
- **Primary keyword:** IPTV Android TV
- **Search intent:** Transactional/commercial — device compatibility + setup overview
- **Secondary keywords:** IPTV Android Box, IPTV auf Android TV
- **Long-tail supporting:** "IPTV APK installieren Android TV", "Android TV Box für IPTV", "IPTV Android TV Play Store"
- **Semantic/related terms:** APK, Play Store, HEVC-Decoder, RAM/Hardware-Anforderungen
- **Funnel stage:** MOFU→BOFU
- **Should receive internal links from:** `/`, `/iptv-service`, `/blog/iptv-device-setup-guide`, `/blog/best-iptv-devices-2026`, `/blog/tivimate-vs-ibo-player`, `/iptv-smart-tv`, `/iptv-fire-tv-stick`
- **Should provide internal links to:** `/blog/best-iptv-devices-2026`, `/blog/tivimate-vs-ibo-player`, `/plans`, `/iptv-smart-tv`, `/iptv-fire-tv-stick`
- **Must NOT compete with:** "beste IPTV Geräte 2026" (→ `/blog/best-iptv-devices-2026`)
- **Content gap:** this page currently has no matching deep-dive blog spoke (Smart TV and Fire TV Stick each have one) — see Missing Opportunities §4.

### `/plans`
- **Primary keyword:** IPTV Preise
- **Search intent:** Transactional — the actual conversion/pricing page
- **Secondary keywords:** IPTV Abo, IPTV Tarife, IPTV Kosten
- **Long-tail supporting:** "IPTV Abo Preise Deutschland", "IPTV Tarif 12 Monate", "IPTV Kosten pro Monat"
- **Semantic/related terms:** Laufzeit, Geräteanzahl, Aktivierung, Zahlungsmethoden
- **Funnel stage:** BOFU
- **Should receive internal links from:** every landing page and every blog post (already largely true via the standard "Bereit für Premium-Streaming?" CTA block)
- **Should provide internal links to:** `/faq`, `/contact`
- **Must NOT compete with:** "IPTV kaufen" (→ `/blog/how-to-buy-iptv`, the educational how-to-buy-safely guide — `/plans` is the destination that guide converts into, not a competing target for the same query)

---

## 3. TIER 2 — Blog pillars

### `/blog/iptv-guide-2026` (pillar, cluster: grundlagen)
- **Primary keyword:** IPTV 2026
- **Search intent:** Informational-commercial hybrid hub — broadest entry point into the whole "grundlagen" cluster
- **Secondary keywords:** IPTV Anbieter, IPTV Kosten, IPTV Vergleich, IPTV Test
- **Long-tail supporting:** "IPTV Deutschland 2026 Anbieter", "IPTV Kosten Vergleich 2026", "IPTV einrichten Fire TV Stick Smart TV"
- **Semantic/related terms:** Xtream Codes, M3U-Playlist, EPG, VOD-Bibliothek
- **Funnel stage:** TOFU→MOFU
- **Should receive internal links from:** all `grundlagen` spokes, `/iptv-service`, homepage
- **Should provide internal links to:** `/iptv-service`, `/iptv-providers`, `/best-iptv-service`, `/iptv-fire-tv-stick`, `/iptv-smart-tv`, `/plans`
- **Must NOT compete with:** "was ist IPTV" (→ `what-is-iptv-guide`), "bester/beste IPTV Anbieter" (→ `/best-iptv-service` / `best-iptv-providers-2026`), "IPTV kaufen" (→ `how-to-buy-iptv`)
- **Note:** carries "IPTV Test" only as a *secondary* keyword — it should not become anyone's primary until a dedicated IPTV-Test page exists (see §4). Until then this pillar is the closest legitimate current match for that query.

### `/blog/iptv-device-setup-guide` (pillar, cluster: geraete)
- **Primary keyword:** IPTV einrichten
- **Search intent:** Informational/transactional hub — "how do I set IPTV up on any device"
- **Secondary keywords:** IPTV Installation, IPTV auf allen Geräten
- **Long-tail supporting:** "IPTV einrichten Anleitung 2026", "IPTV Zugangsdaten eingeben", "IPTV auf Smartphone einrichten"
- **Semantic/related terms:** M3U-Playlist, Xtream Codes, App-Installation, EPG laden
- **Funnel stage:** TOFU→MOFU
- **Should receive internal links from:** all `geraete` spokes, all three device landing pages
- **Should provide internal links to:** `/iptv-smart-tv`, `/iptv-fire-tv-stick`, `/iptv-android-tv`, `/plans`
- **Must NOT compete with:** device-specific setup queries owned by the spokes below (`iptv-smart-tv-guide`, `iptv-fire-tv-stick-setup-guide`)

### `/blog/best-iptv-providers-2026` (pillar, cluster: anbieter)
- **Primary keyword:** beste IPTV Anbieter 2026
- **Search intent:** Commercial investigation — the deepest, most comprehensive, year-dated comparison asset
- **Secondary keywords:** IPTV Anbieter Vergleich, IPTV Bewertungen, IPTV 4K Streaming, IPTV Qualität
- **Long-tail supporting:** "beste IPTV Anbieter 2026 Vergleich", "IPTV Anbieter Checkliste", "unseriöse IPTV Anbieter erkennen"
- **Semantic/related terms:** Serverstabilität, Reseller, gefälschte Bewertungen, Testphase
- **Funnel stage:** MOFU→BOFU
- **Should receive internal links from:** all `anbieter` spokes, `/iptv-providers`, `/best-iptv-service`
- **Should provide internal links to:** `/iptv-providers`, `/best-iptv-service`, `/plans`
- **Must NOT compete with:** "IPTV Anbieter Deutschland" (→ `/iptv-providers`), "bester IPTV Anbieter" evergreen criteria (→ `/best-iptv-service`)

---

## 4. TIER 3 — Blog spokes

### Cluster: grundlagen

**`what-is-iptv-guide`**
- Primary: **was ist IPTV** · Intent: Informational (pure definition) · Secondary: IPTV Grundlagen, IPTV Vorteile · Long-tail: "was bedeutet IPTV", "IPTV einfach erklärt" · Semantic: Internet Protocol Television, Streaming vs. Broadcast · Funnel: TOFU · Receives from: `/blog/iptv-guide-2026`, `/iptv-service` · Provides to: `/iptv-service`, `/blog/iptv-guide-2026` · Must not compete with: "IPTV 2026" hub (`iptv-guide-2026`)

**`benefits-of-iptv`**
- Primary: **IPTV Vorteile** · Intent: Informational (reasons-to-switch) · Secondary: IPTV vs. Kabel Vorteile, IPTV Flexibilität · Long-tail: "Vorteile IPTV gegenüber Kabel-TV", "warum IPTV statt Satellit" · Semantic: Preis-Leistung, Gerätevielfalt, VOD · Funnel: TOFU · Receives from: `/blog/iptv-guide-2026`, `/best-iptv-service` · Provides to: `/best-iptv-service`, `/blog/iptv-vs-cable-tv` · Must not compete with: `iptv-vs-cable-tv` (direct comparison angle) or the hub's own "Vorteile" section

**`streaming-trends-2026`**
- Primary: **Streaming Trends 2026** · Intent: Informational/news · Secondary: IPTV Trends Deutschland · Long-tail: "Zukunft von IPTV", "Streaming Entwicklung 2026" · Semantic: Konsolidierung, Bildqualität, mobiles Streaming · Funnel: TOFU (freshness/authority play, low direct commercial overlap) · Receives from: `/blog/iptv-guide-2026` · Provides to: `/iptv-service` · Must not compete with: any commercial page — deliberately kept low-commercial

**`iptv-vs-cable-tv`**
- Primary: **IPTV vs. Kabel-TV** · Intent: Informational/comparison (migration-focused) · Secondary: IPTV ohne Kabel, Kabel-TV kündigen · Long-tail: "Kabel-TV kündigen und auf IPTV wechseln", "IPTV statt Satellit", "Datenverbrauch IPTV" · Semantic: Kabel-Umlage, Kündigungsfrist, Receiver · Funnel: TOFU→MOFU · Receives from: `/blog/iptv-guide-2026`, `/iptv-service` · Provides to: `/iptv-service`, `/plans` · Must not compete with: `benefits-of-iptv` (general benefits vs. this post's specific cable-replacement mechanics)

**`iptv-channels-guide`**
- Primary: **IPTV Sender** · Intent: Informational (catalog/offering overview) · Secondary: IPTV Senderliste, IPTV Sportsender, IPTV EPG · Long-tail: "wie viele Sender hat IPTV", "IPTV Sportsender Liste", "IPTV Filme und Serien Angebot" · Semantic: VOD, Kindersender, Regionalsender · Funnel: TOFU→MOFU · Receives from: `/blog/iptv-guide-2026`, `/iptv-service` · Provides to: `/iptv-service`, `/plans` · Must not compete with: nothing else currently targets "IPTV Sender" as primary — sole owner; homepage's keyword array should stop listing it (see §1 note)

### Cluster: geraete

**`iptv-smart-tv-guide`**
- Primary: **IPTV auf Smart TV nutzen** · Intent: Informational/how-to (deep setup steps) · Secondary: IPTV Tizen, IPTV webOS · Long-tail: "IPTV Bildqualität Smart TV optimieren", "EPG auf Smart TV nutzen" · Semantic: Tizen, webOS, Bildverarbeitung · Funnel: MOFU · Receives from: `/blog/iptv-device-setup-guide`, `/iptv-smart-tv` · Provides to: `/iptv-smart-tv`, `/plans` · Must not compete with: `/iptv-smart-tv` (commercial overview owns the bare "IPTV Smart TV" term)

**`best-iptv-devices-2026`**
- Primary: **beste IPTV Geräte 2026** · Intent: Commercial investigation (device comparison) · Secondary: IPTV Player Vergleich, Fire TV vs. Apple TV vs. Android-Box · Long-tail: "welches Gerät für IPTV kaufen", "IPTV Streaming Box Vergleich 2026" · Semantic: Apple TV, HDMI, Prozessorleistung · Funnel: MOFU · Receives from: `/blog/iptv-device-setup-guide` · Provides to: `/iptv-fire-tv-stick`, `/iptv-android-tv`, `/plans` · Must not compete with: any single device page's own name-keyword (this post's job is cross-device comparison, not owning any one device's head term)

**`tivimate-vs-ibo-player`**
- Primary: **TiviMate vs. IBO Player** · Intent: Commercial comparison (named-app) · Secondary: beste IPTV App, IPTV Player App · Long-tail: "TiviMate Playlist hinzufügen", "IBO Player einrichten" · Semantic: M3U, EPG-Import, App-Anpassung · Funnel: MOFU · Receives from: `/blog/iptv-device-setup-guide`, `/iptv-android-tv` · Provides to: `/iptv-android-tv`, `/iptv-fire-tv-stick` · Must not compete with: a future broader "beste IPTV App 2026" roundup (see §4 gaps) — this post should stay scoped to the two named apps

**`iptv-fire-tv-stick-setup-guide`**
- Primary: **IPTV Fire TV Stick installieren** · Intent: Transactional how-to (deepest Fire TV Stick guide) · Secondary: IPTV App Fire TV Stick, Xtream Codes vs. M3U-Playlist · Long-tail: "IPTV Smarters Pro Fire TV Stick", "Downloader App IPTV installieren" · Semantic: Sideloading, Benutzerprofile, Kindersicherung · Funnel: MOFU→BOFU · Receives from: `/blog/iptv-device-setup-guide`, `/iptv-fire-tv-stick` · Provides to: `/iptv-fire-tv-stick`, `/plans` · Must not compete with: `/iptv-fire-tv-stick` (commercial overview owns the bare "IPTV Fire TV Stick" term)

### Cluster: anbieter

**`fix-iptv-buffering-vpn-dns`**
- Primary: **IPTV Pufferung beheben** · Intent: Informational/troubleshooting (network-layer) · Secondary: IPTV VPN, IPTV DNS · Long-tail: "IPTV ruckelt was tun", "DNS Server für IPTV ändern", "Drosselung IPTV Internetanbieter" · Semantic: Ethernet, 1.1.1.1 DNS, ISP-Drosselung · Funnel: MOFU (retention/support content, still valuable for organic) · Receives from: `/blog/best-iptv-providers-2026` · Provides to: `/iptv-troubleshooting-guide` (currently missing — see fix note in Cannibalization Map §3), `/contact` · Must not compete with: `iptv-troubleshooting-guide` (app/playlist-layer errors, not network-layer)

**`sports-streaming-4k-guide`**
- Primary: **Sport Streaming 4K** · Intent: Informational · Secondary: IPTV Sportsender, Live-Sport 4K · Long-tail: "Sport in 4K streamen Bandbreite", "IPTV Fußball 4K" · Semantic: 60 FPS, Bandbreite, Ultra HD · Funnel: TOFU→MOFU · Receives from: `/blog/best-iptv-providers-2026`, `/blog/iptv-channels-guide` · Provides to: `/iptv-service`, `/plans` · Must not compete with: `iptv-channels-guide` (general channel catalog vs. this post's 4K/sports-technical focus)
- **Expansion note:** currently has no explicit Bundesliga/DAZN/Sky-branded long-tail — see gap in §4 below.

**`iptv-troubleshooting-guide`**
- Primary: **IPTV Fehler beheben** · Intent: Informational/troubleshooting (app-layer) · Secondary: IPTV Playlist Fehler, IPTV EPG Fehler · Long-tail: "IPTV Playlist lädt nicht", "EPG funktioniert nicht IPTV", "HW vs SW Decoder IPTV" · Semantic: M3U-Fehler, Hardware-Decoder, Bildsynchronisation · Funnel: MOFU · Receives from: `/blog/best-iptv-providers-2026` · Provides to: `fix-iptv-buffering-vpn-dns` (currently missing reciprocal link), `/contact` · Must not compete with: `fix-iptv-buffering-vpn-dns` (network-layer vs. app-layer split, kept intentionally distinct)

**`how-to-buy-iptv`**
- Primary: **IPTV kaufen** · Intent: Transactional (purchase process/safety) · Secondary: IPTV sicher kaufen, IPTV Abo kaufen · Long-tail: "IPTV kaufen Anleitung", "wie kaufe ich IPTV sicher", "IPTV Zahlungsmethoden" · Semantic: Xtream Codes, Testphase, Kündigung · Funnel: BOFU · Receives from: `/blog/best-iptv-providers-2026`, `/iptv-providers` · Provides to: `/plans` (primary conversion target), `/iptv-providers` · Must not compete with: `/plans` (pricing/product page — this post is the pre-purchase education layer that funnels into it, not a competing target for "IPTV Preise")

---

## 5. Cannibalization Map

| Contested term | Pages that touch it | Resolution |
|---|---|---|
| **IPTV Deutschland** | `/`, (loosely) `iptv-guide-2026` | `/` is sole primary owner; `iptv-guide-2026` uses "IPTV 2026" instead |
| **IPTV Anbieter** | `/iptv-providers`, `/best-iptv-service`, `best-iptv-providers-2026`, `iptv-guide-2026` | `/iptv-providers` = sole primary owner of the bare term (trust angle). Others use modified variants: `/best-iptv-service` → "bester IPTV Anbieter"; `best-iptv-providers-2026` → "beste IPTV Anbieter 2026"; `iptv-guide-2026` → keeps it as secondary only |
| **beste IPTV Anbieter** | `/best-iptv-service`, `best-iptv-providers-2026` | `/best-iptv-service` = evergreen quality-criteria (not year-dated); `best-iptv-providers-2026` = dated, deepest comparison pillar. Distinct enough by modifier + depth, but the highest-risk pair on the site — monitor SERP overlap after any content update |
| **IPTV kaufen** | `how-to-buy-iptv`, `/plans` | `how-to-buy-iptv` = sole owner of "IPTV kaufen" (informational-transactional). `/plans` retargeted to "IPTV Preise" (pure pricing/product intent) instead of a near-duplicate "IPTV Abo kaufen" |
| **IPTV Test** | `iptv-guide-2026` (secondary only), `best-iptv-providers-2026` (implicit, FAQ mention) | **No primary owner exists.** Highest-priority gap — see §6 |
| **IPTV Sender** | `iptv-channels-guide`, `/` (keywords array only) | `iptv-channels-guide` = sole owner; homepage's keyword array should stop listing this term (code note, not changed this phase) |
| **IPTV Smart TV** | `/iptv-smart-tv`, `iptv-smart-tv-guide` | Landing page owns the bare commercial term; blog post owns the "...nutzen"/how-to variant. Same split pattern as Fire TV Stick below |
| **IPTV Fire TV Stick** | `/iptv-fire-tv-stick`, `iptv-fire-tv-stick-setup-guide`, `best-iptv-devices-2026` | Landing page = bare term; setup guide = "...installieren" how-to; devices-comparison post must not target the bare term at all (Fire TV Stick is only one of several devices it discusses) |
| **IPTV Android TV** | `/iptv-android-tv`, `best-iptv-devices-2026`, `tivimate-vs-ibo-player` | Landing page = sole owner of the bare term. The other two touch Android TV only as a secondary/contextual mention, never as their primary |
| **IPTV App** | `tivimate-vs-ibo-player` (narrow: two named apps only) | **No page owns the broad "IPTV App" / "beste IPTV App" query.** Second-highest-priority gap — see §6 |

---

## 6. Missing Keyword Opportunities (ranked)

| # | Cluster / new page | Target keyword(s) | Why it matters for DE | Priority |
|---|---|---|---|---|
| 1 | New landing page (e.g. `/iptv-test` or `/blog/iptv-test-kostenlos`) | IPTV Test, IPTV kostenlos testen | Highest-intent query pattern in this vertical with currently zero dedicated owner — only mentioned inline elsewhere | **CRITICAL** |
| 2 | New spoke (grundlagen or new "vertrauen" cluster) | ist IPTV legal, IPTV legal Deutschland | Top pre-purchase trust concern for German buyers; currently one FAQ line only | **CRITICAL** |
| 3 | New spoke, geraete cluster | beste IPTV App 2026, welche IPTV App | Named-app cannibalization watch-list term with no broad-match owner; `tivimate-vs-ibo-player` is deliberately narrow | **HIGH** |
| 4 | New spoke, grundlagen | GEZ IPTV, Rundfunkbeitrag IPTV | Germany-specific licensing-fee question, no US/UK equivalent, currently absent | **HIGH** |
| 5 | New spoke, anbieter or new "sport" cluster | Bundesliga IPTV, DAZN IPTV Alternative, Sky Sport IPTV | High-volume German sports-streaming queries; frame carefully as legal-alternative content | **HIGH** |
| 6 | New spoke, geraete (fills the Android TV symmetry gap) | IPTV Android TV einrichten | Smart TV and Fire TV Stick each have a deep-dive spoke; Android TV doesn't | **MEDIUM** |
| 7 | New spoke, anbieter or geraete | beste VPN für IPTV | Currently a subsection inside `fix-iptv-buffering-vpn-dns` only, not a standalone commercial asset | **MEDIUM** |
| 8 | New reference spoke, geraete | was ist M3U Playlist, Xtream Codes erklärt | Technical terms used throughout the blog but never given their own definitional page — cheap to produce, good AI Overview/snippet bait | **MEDIUM** |
| 9 | New spoke, grundlagen | IPTV vs. Netflix Disney+ Kosten | `iptv-vs-cable-tv` compares against cable/satellite only, not the streaming-subscription stack households now actually compare against | **MEDIUM** |
| 10 | Optional new landing/spoke | IPTV Apple TV | Smaller DE market share than Fire TV Stick/Android TV; lowest priority device gap | **LOW** |

---

## 7. Recommended Content Priorities (sequencing, not yet executed)

1. **Fix the two easy, zero-risk internal-linking gaps first** (no new content required): add a reciprocal link between `fix-iptv-buffering-vpn-dns` ↔ `iptv-troubleshooting-guide`; remove `"bester IPTV Anbieter"`, `"IPTV kaufen"`, `"IPTV Sender"` from the homepage's `metadata.keywords` array in `app/layout.tsx`.
2. **Fill gap #1 (IPTV Test)** — highest-intent, zero-competition-on-site opportunity.
3. **Fill gap #2 (IPTV legal Deutschland)** — trust-critical, cheap to produce, directly supports conversion on every commercial page.
4. **Differentiate `/best-iptv-service` vs. `best-iptv-providers-2026`** content-wise once rewriting begins — the highest-risk existing cannibalization pair.
5. **Retarget `/plans`** from its current pricing-only framing toward explicitly owning "IPTV Preise" language, freeing `how-to-buy-iptv` to fully own "IPTV kaufen" without overlap.
6. **Fill gap #3 (beste IPTV App 2026)** — resolves the "IPTV App" cannibalization watch-list term.
7. **Fill gap #6 (IPTV Android TV einrichten)** — brings `/iptv-android-tv` up to parity with its sibling device pages (also flagged as the thinnest page in the Phase 1 audit).
8. **Fill gaps #4–#5 (GEZ/Rundfunkbeitrag, Bundesliga/DAZN/Sky)** — highest-volume but requires the most careful legal framing; sequence after the trust-building content above is live.
9. **Gaps #7–#10** as ongoing topical-authority backlog, no urgency.

No content was rewritten and no metadata was changed in producing this document.
