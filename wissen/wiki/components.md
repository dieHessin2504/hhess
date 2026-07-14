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
- Drei Layouts:
  - **2-spaltig, einfache Foto-Box** (Homepage `index.html`): `.hero__grid` + `.hero__media.hero__media--box` (weiße Box mit Border, Platzhalter-Text bis echtes Foto da ist).
  - **2-spaltig, rundes Foto + versetztes Siegel** (Kundenstimmen `kundenstimmen.html`): `.hero__grid` + `.hero__media` → darin `.hero__photo` (rundes Foto, `border-radius:50%`) und `.hero__seal` (absolut positioniert, `left:-20px`, `bottom:18%`, leicht über den linken Rand des Fotos versetzt — enthält das ratedo-Badge, siehe unten).
  - **Zentriert** (`--centered`, Service-Seite): kein Media-Element.
- Reassurance-Zeile (`.hero__reassure`): Punkte mit `fa-check`-Icon, alles weiß.

## ratedo.de-Einbindungen (zwei verschiedene, nicht verwechseln!)
- **Siegel/Badge** (`ratedo_badge`, `data-type="deluxe2"`, Script `ratedo-badge.min.js`): kompakt (max. 180px), zeigt nur Sterne + Gesamtnote. Verwendet im Kundenstimmen-Hero (`.hero__seal`), leicht versetzt auf dem Foto.
- **Widget 2** (`ratedo-w2`, Script `ratedo-widget2.min.js`): große Promo-Karte (~700px breit) mit Kopfzeile, Siegel-Medaille, Kategorie-Bewertungen, "Bewertungen ansehen"-Link. **Nicht mehr auf der Website verwendet** (war im Filter-Abschnitt von Kundenstimmen, wurde entfernt — sprengt als kleines Badge das Layout).
- Theming-Variablen (`--ratedo-color-*`) liegen zentral in `styles.css` `:root`, nicht pro Seite inline duplizieren.
- DSGVO-Einordnung (berechtigtes Interesse, ohne Consent-Gate): siehe `memory/decisions.md`.

## Testimonial-Card (`.testimonial`, Kundenstimmen-Seite)
- Aufbau: Sterne + Zitat-Icon → Zitat-Text → Trennlinie → Avatar-Kreis + Name + kursive Rolle.
- `.testimonial__text` hat festes `margin-bottom` (nicht nur `margin-top: auto` auf dem Footer), damit der Abstand zur Trennlinie **nie** zusammenfällt, egal wie lang der Zitat-Text ist.
- Hover: siehe `design-system.md` Abschnitt "Hover-Konventionen" (schwächer als Standard-Card).

## Kundenstimmen-Filter (`.ks-filter`, `.ks-panel`)
- Drei Buttons (Allgemeines/Onlinekurse/1:1 Beratung). "Allgemeines" zeigt alle drei Panels gestapelt, die anderen zeigen nur ihr Panel (`hidden`-Attribut).
- **Wichtig:** Abstands-Selektoren zwischen Panels müssen `:not([hidden])` verwenden (`.ks-panel:not([hidden]) ~ .ks-panel:not([hidden])`), sonst springt der Inhalt beim Filtern — siehe `memory/learnings.md`.
- Nach jedem Filter-Klick scrollt die Seite per JS sanft zum Anfang von `.ks-panels` (unterhalb des Sticky-Headers), falls weiter unten gescrollt war.

## Newsletter-CTA (`.newsletter-cta`) — wiederkehrende Sektion über dem Footer
- Zweck: Newsletter-Anmeldung, direkt über dem Footer. Als **wiederkehrende Komponente** gedacht (bisher nur auf `kundenstimmen.html` gebaut, Rollout auf weitere Seiten offen — siehe `memory/INDEX.md`).
- Hintergrund: linearer Verlauf `to right, #1A293E → #234B79` (Text komplett weiß) — **anderer Verlauf als der Hero** (der ist radial, siehe oben). Bewusst kein pill-/kartenartiges Element, volle Sektionsbreite.
- Aufbau: `.newsletter-cta__title` (H2, `max-width: 860px` → erzwingt exakt 2 Zeilen), `.newsletter-cta__lead` (`max-width: 760px` → exakt 3 Zeilen, Farbe volles Weiß), `.newsletter-cta__embed` (Formular-Einbettung), `.newsletter-cta__legal` (Datenschutz-Hinweis, Link-Hover in `--color-accent`).
- **Formular:** eingebunden per Encharge-Embed-Script (`embed-production.min.js`) + `<div class="encharge-form-embed" data-encharge-form-id="…">`. Das Script ersetzt den Div zur Laufzeit durch ein `<iframe>` mit dem eigentlichen Formular — Höhe wird von Encharge selbst per `postMessage` gesetzt.
- **Bekannte Einschränkung:** Der Innenabstand unterhalb des Formular-Buttons kommt aus Enchargeʼs eigenem Formular-Design (Cross-Origin-iFrame — von unserer Seite aus nicht stylebar). `.newsletter-cta__legal` nutzt aktuell einen **negativen `margin-top`** (`-40px`) als Annäherung, um den Hinweistext näher an den Button zu ziehen. Sauberer wäre, den unteren Abstand direkt im Encharge-Formular-Editor zu verkleinern. Siehe `memory/decisions.md`.
- **Verworfen:** Eine dezente CSS-Wellen-Animation im Hintergrund (zwei SVG-Wellen, per `translateX`-Loop bewegt) wurde gebaut, aber auf Wunsch wieder entfernt — gleiche Linie wie beim Hero: **keine Bewegung im Hintergrund**, siehe `memory/decisions.md`.
