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
- `wissen/` — Projektwissen
  - `memory/` — Gedächtnis (INDEX, decisions, changelog, learnings)
  - `wiki/` — Wiki (design-system, components, seo, architecture)
- Root: `CLAUDE.md` (Konstitution), `.claude/` (Regeln), `setup-claude.sh` (einmaliges Setup-Skript, bereits ausgeführt)

## Tech-Stand (Ist)
- Reines statisches HTML/CSS, kein Build-Schritt, kein JS-Framework.
- Externe Abhängigkeiten via CDN: Google Fonts (Inter), Font Awesome 6.5 (Icons).
- Kleiner Inline-JS-Schnipsel je Seite nur für das mobile Menü.

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
