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
- `wissen/` — Projektwissen
  - `memory/` — Gedächtnis (INDEX, decisions, changelog, learnings)
  - `wiki/` — Wiki (design-system, components, seo, architecture)
- Root: `CLAUDE.md` (Konstitution), `.claude/` (Regeln), `setup-claude.sh` (einmaliges Setup-Skript, bereits ausgeführt)

## Tech-Stand (Ist)
- Reines statisches HTML/CSS, kein Build-Schritt, kein JS-Framework.
- Externe Abhängigkeit via CDN: nur noch Font Awesome 6.5 (Icons). Google Fonts (Inter) wird seit 14.07.2026 **selbst gehostet**, siehe unten.
- Kleiner Inline-JS-Schnipsel je Seite nur für das mobile Menü (+ Themen-Grid-Interaktion, Content-Blocker für Videos, je nach Seite).
- **Inter selbst gehostet (`assets/fonts/`):** kein `@import`/Google-Request mehr, kein `fonts.googleapis.com`/`fonts.gstatic.com` im `<head>`. Zwei `@font-face`-Regeln in `styles.css` (Latin + Latin-Extended, per `unicode-range` getrennt, Browser lädt nur das tatsächlich gebrauchte Subset). Es sind **Variable-Font-Dateien** — eine Datei pro Subset deckt `font-weight: 400 800` komplett ab, deshalb genügen 2 Dateien statt (Subsets × Weights). Grund: Performance (ein Drittanbieter-Roundtrip weniger) UND DSGVO (keine IP-Übertragung an Google beim Seitenaufruf — Google Fonts extern laden war 2022 Gegenstand eines LG-München-Urteils). Bei neuen Font-Gewichten/-Schriften: Dateien lokal ablegen, nicht wieder auf Google-Fonts-`<link>`/`@import` zurückfallen.
- **Font Awesome lädt async:** NICHT render-blockierend (kein normaler `<link rel="stylesheet">`). Jede Seite lädt es im `<head>` per `rel="preload" as="style" onload="this.rel='stylesheet'"` + `<noscript>`-Fallback, dazu `rel="preconnect"` für `cdnjs.cloudflare.com`. Grund: Lighthouse-Report zeigte ~900ms Render-Blocking allein durch Font Awesome. Die eigene `styles.css` bleibt bewusst normal (render-blockierend, aber klein). Bei neuen Seiten diesen `<head>`-Block aus einer bestehenden Seite übernehmen, nicht wieder einfache `<link>`-Tags.

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
- **Lokale Vorschau:** `npx http-server` im Projektordner → `http://127.0.0.1:8099/website/index.html`.
- **Domain hhess.de:** noch nicht angebunden (erst wenn Inhalte final; Vercel → Settings → Domains).

## Offene technische Punkte
- Platzhalter-Fotos (Hero/About) und Dummy-Links (z. B. „Shop") noch ersetzen.
- Font Awesome ist eine Substitution fürs finale Icon-Set (siehe design-system.md).
