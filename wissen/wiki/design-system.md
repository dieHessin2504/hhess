# Design-System — HHESS.de

> Quelle: Claude-Design-Projekt „HHESS.de" (Brand Design Guide von Hiacynta Hess).
> Implementiert in `website/css/styles.css`. Diese Datei ist die Referenz — bei Abweichung gilt der Brand Guide.

## Marke & Prinzipien
- Persönliche Marke & Business-Site von Hiacynta Hess — Webdesign- & SEO-Coaching für Selbstständige.
- Sprache: **Deutsch, „du"**, warm, direkt, empathisch-expertig. Keine Emojis im Kundentext.
- Flächen: nur **zwei Hintergründe** (Off-White-Seite + weiße Cards). Keine Verläufe (Ausnahme: Hero).
- Cards: flach, nur Border (keine Schatten im Ruhezustand).
- Animation: minimal, nur Hover-Übergänge (0.2s ease).

## Farben (Tokens)
| Token | Wert | Verwendung |
|-------|------|-----------|
| `--color-primary` | `#2B609D` | Icons, interaktive Border, Links |
| `--color-eyebrow-blue` | `#285E9A` | Eyebrow/Dachzeile über Headlines |
| `--color-ink` | `#142F4E` | Headlines & Body (kein reines Schwarz) |
| `--color-accent` | `#FFA22A` | Buttons, Badges, CTAs |
| `--color-bg-page` | `#F9F9F7` | Seitenhintergrund |
| `--color-bg-card` | `#FFFFFF` | Cards auf der Seite |
| `--color-badge-bg` | `#E6EEF7` | Badge-BG, Icon-Tile-BG |
| `--color-border` | `#DADDE6` | Card-Border, Trennlinien (1–1.5px) |

**Hero:** dunkler Radial-Gradient `#597AAB → #1C2B41` (ohne Animation), Eyebrow in Accent-Orange, restlicher Text (Headline, Absatz, Reassurance-Punkte + Check-Icons) komplett **weiß**.

## Typografie
- **Einheit:** Schriftgrößen **immer in `rem`** (Basis 16px = 1rem, z. B. 18px → 1.125rem). px nur für Layout-Maße (Border, Radius, Kachelgröße). Nennt der User px, wird umgerechnet.
- **Schrift:** Inter (400/500/600/700/800) — eine Schrift für alles, keine Serifen.
- **Eyebrow:** 11px, 600, uppercase, letter-spacing 0.08em, Farbe `--color-eyebrow-blue`.
- **H1:** clamp(2rem → 3rem), 800, line-height 1.2
- **H2:** clamp(1.75rem → 2.25rem), 700, line-height 1.3
- **H3:** clamp(1.5rem → 1.75rem), 600, line-height 1.4
- **Body:** 1.1rem, 400, line-height 1.6
- **Badge:** 14px, 600 · **Label:** 15px, 600

## Spacing
Skala: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64` px.
Card-Padding: `1.25rem` · Button-Padding: `10px 24px`.

## Layout
- **Zwei Content-Breiten** (zentriert). Header & Footer bleiben immer 1300px — nur die Content-Spalte variiert:
  - **Standardbreite: 1300px** (`--container-max`, `.container`) — Standard, v. a. für Hero-Seiten.
  - **Schmale Breite: 800px** (`--container-narrow`, `.container--narrow`) — für textlastige Standardseiten (Impressum, Datenschutz, Blog); bessere Lesbarkeit (~70–75 Zeichen/Zeile).
  - Anwendung: `class="container container--narrow"`.
- Sektions-Hintergründe laufen vollflächig (Divi-Prinzip „Section voll / Row").
- Seiten-Typen (Hero-Seite / Standardseite): siehe `components.md`.

## Radien
- Buttons **`2px`** (seit 12.07.2026, vorher 5px) · Badges `6px` · Cards `10px` · Icon-Tiles `14px`.
- Nichts pill-förmig, nichts scharfkantig.

## Komponenten
- **Button** — `primary` (solid Orange, Text weiß) / `secondary` (Outline Blau).
  Hover **invertiert**: primary → weißer BG + oranger Text/Border; secondary → füllt mit `#E6EEF7`.
- **Badge** — `standard` (pale-blue BG) / `highlighted` (Accent-Orange BG, weißer Text).
- **Card** — Icon-Tile → Eyebrow → Titel → Body → Badge. Hover: Border wird `--color-ink`.
- **IconTile** — 64×64px, Radius 14px, pale-blue BG, Icon in Primary-Blau.
- **FitCheck** — zweispaltige Grün/Rot-Checkliste (Selbst-Qualifizierung). *Noch nicht auf einer Seite verwendet.*

## Iconografie
- Stil: **Outline**, stroke-width 1.8, runde Caps/Joins.
- Farbe: Primary-Blau auf pale-blue Tile.
- System: **Font Awesome (Light)** via CDN als Substitution — bei Produktion ggf. ersetzen.

## Offene Punkte
- Echte Fotos fehlen (Hero/About sind Platzhalter-Boxen).
- Font Awesome ist eine Substitution — finales Icon-Set bestätigen.
