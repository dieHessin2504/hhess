# Architektur

## Projektstruktur (wo liegt was)
- `website/` — die ausgelieferte Website (statisches HTML/CSS)
  - `index.html` — Homepage
  - `website-erstellen-lassen.html` — Service-Seite (Hero-Seite)
  - `impressum.html` — Impressum (Standardseite)
  - `datenschutz.html` — Datenschutzhinweise (Standardseite)
  - `kundenstimmen.html` — Kundenstimmen mit Filter-Tabs (Hero-Seite)
  - `youtube.html` — YouTube-Kanal-Landingpage (Hero-Seite)
  - `css/styles.css` — komplettes Stylesheet (Tokens + Komponenten + Layout)
  - `assets/logos/hiacynta-hess-logo.svg` — Logo
  - `assets/fonts/inter-latin.woff2`, `assets/fonts/inter-latin-ext.woff2` — selbst gehostete Inter-Schrift (Variable Font, Weight 400–800, siehe Tech-Stand)
  - `assets/icons/sprite.svg` — selbst gehostetes Icon-Sprite (ersetzt Font Awesome CDN, siehe Tech-Stand)
- `wissen/` — Projektwissen
  - `memory/` — Gedächtnis (INDEX, decisions, changelog, learnings)
  - `wiki/` — Wiki (design-system, components, seo, architecture)
- Root: `CLAUDE.md` (Konstitution), `.claude/` (Regeln), `setup-claude.sh` (einmaliges Setup-Skript, bereits ausgeführt)

## Tech-Stand (Ist)
- Reines statisches HTML/CSS, kein Build-Schritt, kein JS-Framework.
- **Keine CDN-Abhängigkeiten mehr für Fonts/Icons** — sowohl Google Fonts (Inter) als auch Font Awesome (Icons) sind seit 14.07.2026 **selbst gehostet**, siehe unten. Verbleibende externe Requests: ratedo.de-Widget, Encharge-Newsletter-Embed (lazy-loaded), YouTube-Embeds (Content-Blocker).
- Kleiner Inline-JS-Schnipsel je Seite nur für das mobile Menü (+ Themen-Grid-Interaktion, Content-Blocker für Videos, je nach Seite).
- **Inter selbst gehostet (`assets/fonts/`):** kein `@import`/Google-Request mehr, kein `fonts.googleapis.com`/`fonts.gstatic.com` im `<head>`. Zwei `@font-face`-Regeln in `styles.css` (Latin + Latin-Extended, per `unicode-range` getrennt, Browser lädt nur das tatsächlich gebrauchte Subset). Es sind **Variable-Font-Dateien** — eine Datei pro Subset deckt `font-weight: 400 800` komplett ab, deshalb genügen 2 Dateien statt (Subsets × Weights). Grund: Performance (ein Drittanbieter-Roundtrip weniger) UND DSGVO (keine IP-Übertragung an Google beim Seitenaufruf — Google Fonts extern laden war 2022 Gegenstand eines LG-München-Urteils). Bei neuen Font-Gewichten/-Schriften: Dateien lokal ablegen, nicht wieder auf Google-Fonts-`<link>`/`@import` zurückfallen.
- **Icons selbst gehostet (`assets/icons/sprite.svg`):** ersetzt Font Awesome CDN komplett — kein `cdnjs.cloudflare.com` im `<head>` mehr. Ein SVG-Sprite mit `<symbol id="icon-NAME">` pro Icon (nur die ~21 tatsächlich verwendeten Font-Awesome-Solid/Brands-Glyphen, als Rohdaten von `@fortawesome/fontawesome-free` übernommen, Lizenz CC BY 4.0 im Sprite-Kommentar vermerkt). Verwendung im HTML: `<svg class="icon" aria-hidden="true"><use href="assets/icons/sprite.svg#icon-NAME"></use></svg>` — die `.icon`-Klasse in `styles.css` sorgt für `width/height: 1em` + `fill: currentColor`, verhält sich also genau wie vorher die Font-Awesome-Icon-Fonts (Größe über `font-size`, Farbe über `color` des Elternelements). Grund: Font Awesome CDN lud ~100 KB (CSS + 2 Webfonts) für nur 21 genutzte Icons — Lighthouse markierte das als "18 KiB nicht verwendetes CSS"; ein reiner Subset-Wechsel (nur `solid.min.css`+`brands.min.css`) hätte kaum geholfen, weil die Icon-Glyph-Zuordnungen für ALLE Stile in einer gemeinsamen Basisdatei liegen. **Bei einem neuen Icon:** SVG-Pfad von `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@X.Y.Z/svgs/<style>/<name>.svg` holen und als neues `<symbol>` in `sprite.svg` ergänzen — nicht wieder Font Awesome CDN einbinden.

## Ziel-Stack (Soll, laut CLAUDE.md — noch nicht umgesetzt)
- Next.js (App Router) + TypeScript, Tailwind, Supabase (EU), Vercel.
- Migration erst bei Bedarf dynamischer Funktionen.

## Datenmodell (Supabase-Tabellen)
- Noch keine — Supabase ist bewusst noch nicht angebunden.

## ENV-Variablen (Namen, nicht Werte)
- Aktuell keine.

## Deployment
- **Quelle:** GitHub-Repo `dieHessin2504/hhess` (Branch `main`), aktuell öffentlich.
- **Hosting:** Vercel, verbunden mit dem GitHub-Repo → **Auto-Deploy bei jedem `git push`**.
- **Wichtig:** Vercel **Root Directory = `website`** (Seite liegt im Unterordner), Framework Preset „Other", kein Build Command.
- **Clean URLs:** `website/vercel.json` (`{ "cleanUrls": true }`) — Vercel liefert `xyz.html` unter `/xyz` aus (ohne Endung) und leitet `/xyz.html`-Aufrufe per 301 auf `/xyz` um. Alle internen Links in allen 6 Seiten sind entsprechend site-weit auf endungslose, wurzelrelative Pfade umgestellt (`href="/kundenstimmen"` statt `href="kundenstimmen.html"`, Startseite `href="/"`). **Bei jeder neuen Seite/jedem neuen internen Link:** immer ohne `.html` und mit führendem `/` verlinken.
- **Lokale Vorschau:** `npx serve website -l 8080` über `.claude/launch.json` (kein Python vorhanden) — unterstützt Clean URLs ebenfalls, verhält sich also wie Vercel.
- **Domain hhess.de:** noch nicht angebunden (erst wenn Inhalte final; Vercel → Settings → Domains).

## Offene technische Punkte
- Platzhalter-Fotos (Hero/About) und Dummy-Links (z. B. „Shop") noch ersetzen.
- Die Icons (jetzt selbst gehostet, inhaltlich aber weiterhin Font-Awesome-Glyphen) sind eine Substitution fürs finale Icon-Set (siehe design-system.md).
- CSS-Minifizierung (2 KiB laut Lighthouse) bewusst nicht umgesetzt — würde einen Vercel-Build-Schritt erfordern, Aufwand/Risiko steht nicht im Verhältnis zum kleinen Gewinn.
