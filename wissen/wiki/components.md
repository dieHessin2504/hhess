# Komponenten-Wiki

Pro Komponente: Zweck - Varianten - wo verwendet - Besonderheiten (A11y/SEO).
Hinweis: Aktuell statisches HTML/CSS (keine echten Komponenten/Props). Die in `CLAUDE.md`
genannten `default`/`reduced`-Varianten sind Ziel für den späteren Next.js-Umbau, noch nicht gebaut.

## Seiten-Typen (Layout-Konvention)
Feste Benennung, damit klar ist, wovon wir sprechen:
- **Hero-Seite** (`<body class="page-hero">`): Header **+ blaue Hero-Section** darunter. Für Startseite, Landingpages, Haupt-Angebotsseiten.
- **Standardseite** (`<body class="page-standard">`): Header direkt auf den Inhalt, **keine** blaue Hero. Für Impressum, Datenschutz, Blog, Text-/Rechts-Unterseiten.
- **Footer:** Alle Seiten nutzen den gleichen „normalen" Footer (siehe unten) — unabhängig vom Seiten-Typ.
- Stand: Homepage & Service sind Hero-Seiten; `impressum.html` und `datenschutz.html` sind Standardseiten.

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

## Footer (`.site-footer`) — der „normale Footer"
Der Footer der **Startseite** ist der **normale Footer**. Er wird auf **allen Seiten** verwendet (Hero-Seiten wie Standardseiten). Zweiteilig:
- **Teil 1 – Haupt-Footer** (`.footer-main`, off-white `#F9F9F7`): 4 Spalten
  1. **Marke** (`.footer-brand`): Logo, Kurztext, Social-Icons (dunkel), „100% Empfehlungen auf ratedo.de" (→ `link.hhess.de/ratedo`, neuer Tab), „Kundenstimmen →" (→ `index.html#kundenstimmen`).
  2. **Wissen & Impulse**: Blog, YouTube, Podcast.
  3. **Gratis Starthilfen**: Image Size Helper (Titel + Untertitel).
  4. **Shop & Beratung**: Divi Masterclass, 1:1 Online-Meeting (je mit 40px-Icon-Tile).
  - Spaltentitel: `.footer-col__title` (uppercase, bold, letter-spacing).
- **Teil 2 – Abschlussleiste** (`.footer-bottom`): blauer Streifen `#20395B` **randlos** (volle Bildschirmbreite), Inhalt auf 1300px & bündig zum Raster. Links Copyright, rechts Rechtslinks in einer Reihe (Kunden-Login extern/ThriveCart, Impressum, Datenschutzhinweise). Mobil gestapelt: Links oben, Copyright unten.
- Inhalt je Teil zentriert auf max. 1300px (`.footer-main__inner`, `.footer-bottom__inner`).

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
