# Komponenten-Wiki

Pro Komponente: Zweck - Varianten - wo verwendet - Besonderheiten (A11y/SEO).
Hinweis: Aktuell statisches HTML/CSS (keine echten Komponenten/Props). Die in `CLAUDE.md`
genannten `default`/`reduced`-Varianten sind Ziel für den späteren Next.js-Umbau, noch nicht gebaut.

## Seiten-Typen (Layout-Konvention)
Feste Benennung, damit klar ist, wovon wir sprechen:
- **Hero-Seite** (`<body class="page-hero">`): Header **+ blaue Hero-Section** darunter. Für Startseite, Landingpages, Haupt-Angebotsseiten.
- **Standardseite** (`<body class="page-standard">`): Header direkt auf den Inhalt, **keine** blaue Hero. Für Impressum, Datenschutz, Blog, Text-/Rechts-Unterseiten.
- **Footer:** Alle Seiten nutzen den gleichen „normalen" Footer (siehe unten) — unabhängig vom Seiten-Typ.
- Stand: Homepage, Service, Kundenstimmen und `youtube.html` sind Hero-Seiten; `impressum.html` und `datenschutz.html` sind Standardseiten.

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
- Verwendet in: `index.html`, `website-erstellen-lassen.html`. (Andere Seiten haben eigene Header-Varianten ohne Dropdown, siehe jeweilige Datei.)

## Footer (`.site-footer`) — der „normale Footer"
Der Footer der **Startseite** ist der **normale Footer**. Er wird auf **allen Seiten** verwendet (Hero-Seiten wie Standardseiten). Zweiteilig:
- **Teil 1 – Haupt-Footer** (`.footer-main`, off-white `#F9F9F7`): 4 Spalten
  1. **Marke** (`.footer-brand`): Logo, Kurztext, Social-Icons (dunkel), „100% Empfehlungen auf ratedo.de" (→ `link.hhess.de/ratedo`, neuer Tab), „Kundenstimmen →" (→ `index.html#kundenstimmen`).
  2. **Wissen & Impulse**: Blog, YouTube, Podcast. „YouTube" ist site-weit auf `youtube.html` verlinkt; Blog/Podcast sind noch Platzhalter (`#`), bis diese Seiten existieren.
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
- **Spaltenverhältnis:** `.hero__grid { grid-template-columns: 2fr 1fr; }` — Text-Spalte immer exakt doppelt so breit wie die Media-Spalte (2:1), site-weit für alle zweispaltigen Hero-Layouts.
- **CTA-Zeile mit Zusatz-Link** (bisher nur `youtube.html`): `.hero__cta` kann neben dem `.hh-btn` noch einen `.hero__cta-link` (weißer Textlink, Hover Accent-Orange) enthalten — z. B. Abo-Button + "Beliebteste Videos ansehen →" als Anchor-Link zu einer Sektion weiter unten auf derselben Seite.

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
- Zweck: Newsletter-Anmeldung, direkt über dem Footer. **Wiederkehrende Komponente**, verwendet auf `kundenstimmen.html` (Anchor `#newsletter`) und `youtube.html` (Anchor `#newsletter-abonnieren` — dorthin verlinkt auch der Header-CTA-Button dieser Seite). Rollout auf Homepage/Service noch offen — siehe `memory/INDEX.md`.
- Hintergrund: linearer Verlauf `to right, #1A293E → #234B79` (Text komplett weiß) — **anderer Verlauf als der Hero** (der ist radial, siehe oben). Bewusst kein pill-/kartenartiges Element, volle Sektionsbreite.
- Aufbau: `.newsletter-cta__title` (H2, `max-width: 860px` → erzwingt exakt 2 Zeilen), `.newsletter-cta__lead` (`max-width: 760px` → exakt 3 Zeilen, Farbe volles Weiß), `.newsletter-cta__embed` (Formular-Einbettung), `.newsletter-cta__legal` (Datenschutz-Hinweis, Link-Hover in `--color-accent`).
- **Formular:** eingebunden per Encharge-Embed-Script (`embed-production.min.js`) + `<div class="encharge-form-embed" data-encharge-form-id="…">`. Das Script ersetzt den Div zur Laufzeit durch ein `<iframe>` mit dem eigentlichen Formular — Höhe wird von Encharge selbst per `postMessage` gesetzt.
- **Lazy-Loaded (seit 14.07.2026):** Das `<script src="…embed-production.min.js">` steht NICHT mehr fest im HTML — es wird per `IntersectionObserver` (Inline-JS am Seitenende, `rootMargin: 600px`) erst erzeugt, wenn die Sektion sich dem Viewport nähert. Grund: Das Script zieht selbst wieder eine Ressourcen-Kette nach sich (Formular-Daten von `forms.encharge.io` + Google Fonts Open Sans/Roboto im Encharge-iFrame) — die stand laut Lighthouse-Report im kritischen Ladepfad ganz oben auf der Seite, obwohl die Sektion erst ganz unten sichtbar wird. Bei einer neuen Seite mit dieser Komponente: den `<div class="encharge-form-embed">` OHNE festes Script einbauen und den IntersectionObserver-Block aus `youtube.html`/`kundenstimmen.html` übernehmen.
- **Bekannte Einschränkung:** Der Innenabstand unterhalb des Formular-Buttons kommt aus Enchargeʼs eigenem Formular-Design (Cross-Origin-iFrame — von unserer Seite aus nicht stylebar). `.newsletter-cta__legal` nutzt aktuell einen **negativen `margin-top`** (`-40px`) als Annäherung, um den Hinweistext näher an den Button zu ziehen. Sauberer wäre, den unteren Abstand direkt im Encharge-Formular-Editor zu verkleinern. Siehe `memory/decisions.md`.
- **Verworfen:** Eine dezente CSS-Wellen-Animation im Hintergrund (zwei SVG-Wellen, per `translateX`-Loop bewegt) wurde gebaut, aber auf Wunsch wieder entfernt — gleiche Linie wie beim Hero: **keine Bewegung im Hintergrund**, siehe `memory/decisions.md`.

## Themen-Grid (`.step`, wiederverwendet für dichte Karten-Grids)
- Herkunft: ursprünglich für den 4-Schritte-Prozess auf `website-erstellen-lassen.html` gebaut (`.step` + `.step__num` mit Zahl). Auf `youtube.html` wiederverwendet für ein **3×2-Grid** (6 Karten: 5 Themen-Karten mit Icon in `.step__num` statt Zahl + 1 leere CTA-Karte, siehe unten) — Layout einfach über `class="grid-3 topic-grid"` (bestehende `.grid-3`-Utility, kein neues Grid-CSS).
- Aufbau je Karte: `.step__num` (40×40px, Radius 10px, pale-blue BG) → `h3` (1.1rem, kleiner/dezenter als Standard-H3) → `p` (1rem).
- Hover: **dezent**, siehe „Hover-Konventionen" in `design-system.md` — `.step` zählt als dichtes Grid, nicht als lockere `.card`.
- CTA-Karte (`.topic-grid__cta`): Inhalt vertikal zentriert (kein Icon, keine Beschreibung) — Headline + `.hh-btn--primary` Button, der zur externen Kanal-URL verlinkt (`link.hhess.de/youtubeabonnieren`).
- **Verworfen:** Ursprünglich als Klick-Slider gebaut (3 von 5 Karten sichtbar, Pfeil-Button rückt eine Karte weiter, endlose Schleife über dreifach geklonte Karten). Auf Wunsch durch das statische 3×2-Grid ersetzt, kompletter Slider-Code (CSS + JS) entfernt.

## Trust-Bar (`.trust-bar`) — Kennzahlen-Leiste
- Zweck: drei Kanal-Kennzahlen nebeneinander (z. B. Abonnenten/Aufrufe/Wiedergabezeit), volle Sektionsbreite, dunkler Hintergrund.
- Hintergrund: **eigener** linearer Verlauf `to right, var(--color-ink), var(--color-primary)` (dunkles Navy → helleres Blau) — dritter Gradient neben Hero (radial) und Newsletter-CTA (linear, andere Farben); bewusst nicht verwechseln.
- Aufbau: `<div class="grid-3 container">` mit drei `<div>`s, je `.trust-bar__num` (2.5rem, 800, weiß) + `.trust-bar__label` (kleiner, halbtransparentes Weiß).
- Padding **bewusst kleiner** als normale `.section` (`var(--space-12)` = 48px) — von der site-weiten Padding-Erhöhung auf 100px (siehe `design-system.md` „Spacing") explizit ausgenommen, genau wie `.newsletter-cta`.
- Zahlenformat: Punkt als Tausendertrenner, `+` als Suffix (`3.700+`), passend zur Vorgabe des Users.
- Verwendet in: `youtube.html`, zwischen Themen-Grid und Kundenstimmen-Wand.

## YouTube-Kommentar-Wand (`.yt-wall`, Marquee, zwei Reihen)
- Zweck: „Wall of Love" mit echten YouTube-Kommentaren als Zitat-Karten (`.yt-quote`), die endlos horizontal durchlaufen — Reihe 1 nach rechts, Reihe 2 nach links (gegenläufig), reiner CSS-Loop (keine JS-Bibliothek).
- Technik: Kartenliste wird einmal dupliziert (`aria-hidden="true"` auf der Kopie) und per `@keyframes` zwischen `translateX(0)` und `translateX(-50%)` animiert — bei exakt doppelter Liste ist der Loop nahtlos.
- A11y: `@media (prefers-reduced-motion: reduce)` stoppt die Animation; Hover auf einer Reihe pausiert sie (`animation-play-state: paused`) zum Lesen.
- Karten-Aufbau: `.yt-quote__meta` (kleiner oranger Punkt + „YouTube-Kommentar" Label) → `.yt-quote__text` (Zitat in „ “-Anführungszeichen).
- Kommentar-Texte sind **leicht bereinigt** gegenüber den Original-Kommentaren (Emoji/Slang wie „🙂", „xD" entfernt) — Begründung: Marken-Sprachregel „keine Emojis im Kundentext" (siehe `design-system.md`).
- **Verworfen:** Ein Blur-Effekt (`backdrop-filter` + Masken-Verlauf) am rechten Rand wurde gebaut, auf Wunsch aber wieder entfernt — Karten laufen jetzt scharf bis zum Rand.
- Abstand zum Lead-Text darüber: `margin-top: var(--space-12)` (48px), größer als der Standard-Abstand `.section-lead` → nächstes Element, weil der User hier gezielt mehr Luft wollte.
- Verwendet in: `youtube.html`.

## Video-Grid (`.video-card`) — YouTube-Videos mit Content-Blocker
- Zweck: bis zu drei eingebettete YouTube-Videos als echte Karten (weißer BG, Border, Radius, Hover — siehe „Hover-Konventionen") in `.grid-3`.
- Karten-Aufbau (Referenz-Layout vom User vorgegeben): **Thumbnail (randlos oben) → Titel (h3) → Begleittext (p, 1rem) → Trennlinie (`.video-card__footer`, `border-top`) → darunter links Foto+Name („Hiacynta Hess"), rechts CTA-Link „Jetzt anschauen →"**.
- **Content-Blocker (Zwei-Klick-Lösung):** Standardmäßig lädt **kein** YouTube-iFrame — nur ein Play-Button über einem statischen Thumbnail (`i.ytimg.com`, setzt keine Cookies). Erst per Klick wird `youtube-nocookie.com` (erweiterter Datenschutzmodus, siehe `datenschutz.html`) eingebettet. Zustimmung wird in `localStorage` (`yt-embed-consent`) gemerkt — danach laden alle drei Videos beim nächsten Seitenaufruf direkt, ohne erneuten Klick. Geklickte Karte startet mit `autoplay=1`, die anderen beiden ohne Autoplay.
- Hinweistext unter dem Grid (`.video-grid__note`) verlinkt zu den Datenschutzhinweisen.
- ⚠️ **Platzhalter:** Alle drei `data-video-id`/Thumbnail-/Link-Werte nutzen aktuell dieselbe Demo-ID (`YE7VzlLtp-4`, Big Buck Bunny) — vor Launch durch die echten YouTube-Video-IDs ersetzen (Kommentar im HTML markiert das).
- Verwendet in: `youtube.html`, zwischen Kundenstimmen-Wand und Newsletter-CTA.
