# Changelog

Format: Datum - was gebaut/geaendert - betroffene Dateien.

## 2026-07-12 - Projekt-Setup & erste statische Website
- Design-System „HHESS.de" aus Claude-Design-Projekt importiert (Tokens, Komponenten, 2 Seiten-Designs).
- Zwei Seiten als statisches HTML/CSS umgesetzt: Homepage + „Website erstellen lassen".
- Ordnerstruktur getrennt: `website/` (Code) und `wissen/` (Doku). `CLAUDE.md`, `.claude/` im Root.
- Betrifft: `website/**`, `wissen/**`, `CLAUDE.md`

## 2026-07-12 - Live-Gang
- GitHub-Repo `dieHessin2504/hhess` angelegt, per Vercel deployt (Auto-Deploy bei jedem Push).
- Vercel **Root Directory = `website`** (weil Seite im Unterordner liegt).
- Betrifft: Deployment (siehe `wissen/wiki/architecture.md`)

## 2026-07-12 - Header/Layout/Hero-Feinschliff
- Layout: feste Content-Breite **1300px**, einheitlich für Header, Body, Footer (`--container-max`, `.site-header__inner`, `.site-footer__inner`).
- Header-Menü: Logo größer (38px), Menüpunkte **18px**, Hover = Schrift dunkler + **2px-Linie sliced von links nach rechts** ein, aktiver Menüpunkt zeigt Linie permanent (`.is-active`/`aria-current`).
- Hero: Fließtext + drei Reassurance-Punkte inkl. Check-Icons in **Weiß**; Punkte mit `fa-check`; Button mehr Padding oben/unten (16px).
- Hero-Hintergrund: nach mehreren Animations-Versuchen (Drift/Blobs/Welle) **Animation verworfen** → ruhiger **radialer Verlauf** ohne Bewegung, ohne Text-Schatten.
- Buttons **website-weit 2px Radius** (`--radius-sm`).
- Betrifft: `website/css/styles.css`, `website/index.html`, `website/website-erstellen-lassen.html`

## 2026-07-13 - Footer, Seiten-Struktur, Impressum, rem
- Footer zweiteilig: heller Hauptteil (`.footer-main`) + dunkle Abschlussleiste (`.footer-bottom`, `#20395B`). Rechtslinks (Kunden-Login, Impressum, Datenschutzhinweise) in einer Reihe, rechtsbündig.
- Seiten-Typ-Konvention: `.page-hero` (mit blauer Hero) / `.page-standard` (ohne). Body-Klasse auf allen Seiten.
- Zwei Content-Breiten: Standard 1300px (`--container-max`) + schmal 800px (`--container-narrow`, `.container--narrow`).
- Neue Seite `impressum.html` (Standardseite, Standardbreite).
- Alle CSS-Schriftgrößen von px auf **rem** umgestellt (Tokens + Regeln).
- Doku-Routing-Regel in `CLAUDE.md` verankert; erste `seo.md`-Regel (Meta-Title ≤ 60 Zeichen).
- Betrifft: `website/**`, `CLAUDE.md`, `wissen/**`

## 2026-07-13 - Kundenstimmen-Seite, Footer site-weit, Icons
- Neue Seite `kundenstimmen.html` (Hero-Seite): Filter-Header (Community/Onlinekurse/1:1). Filter startet AUS (alle Bereiche sichtbar), Klick filtert auf einen, erneuter Klick zeigt wieder alle.
- Gruppen-Köpfe mit Icon-Kachel + Kicker-Zeile; Testimonial-Karten mit 5 Sternen, Zitat-Icon, Trennlinie, Avatar-Kreis + „von …" + kursiver Rolle. 26 Testimonials in 3 Gruppen.
- ratedo-Siegel eingebunden (berechtigtes Interesse, siehe decisions.md).
- „Kundenstimmen" site-weit in Menü + Footer auf `kundenstimmen.html` verlinkt.
- Normaler Footer (Teil 1 + Abschlussleiste) jetzt auf ALLEN Seiten (auch Impressum/Datenschutz/Service).
- `fa-light` → `fa-solid` site-weit (fa-light ist FA-Pro und rendert in der kostenlosen CDN nicht).
- Betrifft: `website/**`, `wissen/**`

## 2026-07-13 - Kundenstimmen-Hero mit Foto+Siegel, Seite entschlackt, Filter-Sprung gefixt
- Kundenstimmen-Hero auf zweispaltiges Layout umgestellt: Text links, rundes Foto rechts, kompaktes ratedo-Badge leicht versetzt auf dem Foto (siehe decisions.md).
- Großes ratedo-Widget (Widget2), Hero-Lead-Text, Gruppen-Eyebrows + Icons, "Kundenstimmen im Überblick" und die YouTube-/Shop-CTA-Bänder entfernt (siehe decisions.md).
- Bug behoben: Beim Filter-Wechsel sprang der Inhalt, weil `.ks-panel + .ks-panel { margin-top }` auch bei `hidden`-Panels griff (CSS-Sibling-Selektor ignoriert Sichtbarkeit) — siehe learnings.md.
- Testimonial-Karten: mehr Abstand zwischen Zitat-Text und Trennlinie, Hover mit abgeschwächter blauer Rahmenfarbe + leichtem Schatten.
- Lokaler Vorschau-Server `.claude/launch.json` ergänzt (`npx serve`, da kein Python installiert ist).
- Betrifft: `website/kundenstimmen.html`, `website/index.html`, `website/css/styles.css`, `.claude/launch.json`, `wissen/**`
