# Komponenten-Wiki

Pro Komponente: Zweck - Varianten - wo verwendet - Besonderheiten (A11y/SEO).
Hinweis: Aktuell statisches HTML/CSS (keine echten Komponenten/Props). Die in `CLAUDE.md`
genannten `default`/`reduced`-Varianten sind Ziel für den späteren Next.js-Umbau, noch nicht gebaut.

## Seiten-Typen (Layout-Konvention)
Feste Benennung, damit klar ist, wovon wir sprechen:
- **Hero-Seite** (`<body class="page-hero">`): Header **+ blaue Hero-Section** darunter. Für Startseite, Landingpages, Haupt-Angebotsseiten. Nutzt i. d. R. den vollen Footer (Teil 1 + Abschlussleiste).
- **Standardseite** (`<body class="page-standard">`): Header direkt auf den Inhalt, **keine** blaue Hero. Für Impressum, Datenschutz, Blog, Text-/Rechts-Unterseiten. Nutzt i. d. R. nur die Abschlussleiste (reduzierter Footer).
- Stand: Homepage & Service sind Hero-Seiten; `impressum.html` ist Standardseite; Datenschutz folgt als Standardseite.

## Header (`.site-header`)
- Zweck: Sticky-Kopf mit Logo, Hauptnavigation, primärem CTA.
- Aufbau: vollflächige weiße Leiste + Border; Inhalt in `.site-header__inner` auf **max. 1300px** zentriert.
- Logo: 38px hoch.
- Navigation (`.main-nav`): Menüpunkte **18px**, `font-weight: 600`.
  - Hover: Schrift dunkler (`#0c1d33`) + **2px-Linie** die per `transform: scaleX(0→1)` von links nach rechts einsliced.
  - Aktiver Punkt: Klasse `is-active` + `aria-current="page"` → Linie permanent sichtbar. (Homepage: „Start", Service-Seite: „Service".)
  - Linien-Farbe: Marken-Orange `--color-accent`.
- Dropdown „Service" (nur Homepage): `.has-dropdown`, öffnet bei Hover/Focus (`focus-within`).
- Mobil (≤760px): Hamburger-Button (`.nav-toggle`) toggelt `.main-nav.open` (kleiner Inline-JS).
- Verwendet in: `index.html`, `website-erstellen-lassen.html`.

## Footer (`.site-footer`)
- **Zweiteilig:** Teil 1 (`.footer-main`) hell mit Logo/Text/Social-Icons; Teil 2 (`.footer-bottom`) dunkle Abschlussleiste `#20395B`, zweispaltig.
- Abschlussleiste: links Copyright (`.footer-bottom__copy`), rechts rechtsbündig die Rechtslinks (`.footer-bottom__legal`) — Kunden-Login (extern, ThriveCart), Impressum, Datenschutzhinweise.
- Hero-Seiten (z. B. Homepage): beide Teile. Standardseiten (z. B. Service-Seite): nur Teil 2 (Abschlussleiste).
- Inhalt je Teil auf max. 1300px (`.footer-main__inner`, `.footer-bottom__inner`).

## Button (`.hh-btn`)
- Varianten: `--primary` (solid Orange, Text weiß) / `--secondary` (Outline Blau).
- Radius: **2px** (`--radius-sm`, website-weit).
- Hover **invertiert**: primary → weißer BG + oranger Text/Border; secondary → füllt mit `#E6EEF7`.
- Im Hero größeres vertikales Padding (`.hero .hh-btn { padding: 16px 26px; }`).

## Card (`.card`)
- Icon-Tile → Eyebrow → Titel → Body → Badge. Border-only, Hover: Border wird `--color-ink`.

## Badge (`.badge`)
- `standard` (pale-blue) / `--highlighted` (Accent-Orange, weißer Text).

## IconTile (`.icon-tile`)
- 64×64px, Radius 14px, pale-blue BG, Icon in Primary-Blau (Font Awesome Light).

## Hero (`.hero`)
- Vollflächiger **radialer Verlauf** (hell-blau innen → dunkel außen), keine Animation.
- Text komplett weiß; Eyebrow in Accent-Orange.
- Zwei Layouts: 2-spaltig mit Foto-Box (Homepage) / zentriert (`--centered`, Service-Seite).
- Reassurance-Zeile (`.hero__reassure`): Punkte mit `fa-check`-Icon, alles weiß.
