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
