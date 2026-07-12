# Komponenten-Wiki

Pro Komponente: Zweck - Varianten - wo verwendet - Besonderheiten (A11y/SEO).
Hinweis: Aktuell statisches HTML/CSS (keine echten Komponenten/Props). Die in `CLAUDE.md`
genannten `default`/`reduced`-Varianten sind Ziel für den späteren Next.js-Umbau, noch nicht gebaut.

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
- Zwei Ausprägungen: Standard (Logo + Text + Social-Icons, Homepage) und `--centered` (nur Copyright-Zeile, Service-Seite).
- Inhalt in `.site-footer__inner` auf max. 1300px.

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
