# Entscheidungen

Format pro Eintrag: Datum - Entscheidung - Begruendung - betroffene Bereiche.

## 2026-07-12 - Statisches HTML jetzt, Next.js später
Entscheidung: Die Website startet als reines statisches HTML/CSS (`website/`), nicht sofort im Ziel-Stack (Next.js).
Begruendung: schnell online, kein Backend nötig für die Brochure-Seite. Umbau auf Next.js erst bei Bedarf dynamischer Funktionen.
Betrifft: gesamtes `website/`, `CLAUDE.md` (Ziel-Stack bleibt dokumentiert)

## 2026-07-12 - Hosting: GitHub + Vercel, Supabase später
Entscheidung: Deployment über GitHub-Repo `dieHessin2504/hhess` → Vercel (Auto-Deploy). Supabase noch NICHT.
Begruendung: statische Seite braucht kein Backend; Supabase erst bei Formular-Speicherung/Login/DB-Inhalten.
Betrifft: Deployment

## 2026-07-12 - Feste Content-Breite 1300px, Hintergründe vollflächig
Entscheidung: Content-Spalte überall max. 1300px zentriert; Sektions-Hintergründe laufen vollflächig (Divi-Prinzip „Section voll / Row 1300").
Begruendung: konsistente Ausrichtung von Header/Body/Footer; dunkler Hero soll randlos wirken.
Betrifft: `website/css/styles.css`

## 2026-07-12 - Keine Hero-Animation
Entscheidung: Der Hero bleibt ein ruhiger radialer Verlauf ohne Bewegung.
Begruendung: Bewegte Glows (screen-Blend) machten den Hintergrund stellenweise zu hell → Lesbarkeit der weißen Schrift litt. Mehrere Varianten getestet (Drift, Blobs, Welle) und bewusst verworfen.
Betrifft: `website/css/styles.css` (`.hero`)

## 2026-07-12 - Buttons 2px Radius (website-weit)
Entscheidung: Alle Buttons mit 2px Eckenradius über zentrales Token `--radius-sm`.
Begruendung: gewünschte, klarere Optik; zentrale Steuerung statt Einzelwerte.
Betrifft: `website/css/styles.css`

## 2026-07-13 - Seiten-Typen & zwei Content-Breiten
Entscheidung: Zwei Seiten-Typen — **Hero-Seite** (mit blauer Hero, `.page-hero`) / **Standardseite** (ohne, `.page-standard`). Zwei Content-Breiten — **Standard 1300px** / **schmal 800px** (`.container--narrow`).
Begruendung: klares gemeinsames Vokabular; schmale Breite für Lesbarkeit textlastiger Seiten. Header/Footer bleiben immer 1300px.
Betrifft: `website/css/styles.css`, Seiten-`<body>`, `wissen/wiki/`

## 2026-07-13 - Schriftgrößen in rem
Entscheidung: Alle CSS-Schriftgrößen in **rem** (Basis 16px = 1rem); px-Wünsche werden umgerechnet. Layout-Maße bleiben px.
Begruendung: Konsistenz + Barrierefreiheit (skaliert mit Nutzer-Grundschrift).
Betrifft: `website/css/styles.css`

## 2026-07-13 - ratedo-Siegel ohne Consent (berechtigtes Interesse)
Entscheidung: Das ratedo-Bewertungs-Widget auf `kundenstimmen.html` bleibt eingebunden und lädt OHNE Consent-Gate.
Begruendung: Nutzung auf Grundlage **berechtigten Interesses** (Art. 6 Abs. 1 lit. f DSGVO) — Darstellung/Sammlung von Kundenbewertungen. Vom User ausdrücklich so entschieden.
Betrifft: `website/kundenstimmen.html`.
Hinweis: Lädt externes JS von ratedo.de. Newsletter (Encharge) ist davon getrennt und auf **Einwilligung** (Art. 6 Abs. 1 lit. a) gestützt. Für den Launch unter hhess.de ggf. Consent-/Content-Blocker-Lösung mitdenken.

## 2026-07-13 - Kundenstimmen-Hero: zweispaltig mit Foto + kompaktem ratedo-Siegel
Entscheidung: Hero von `kundenstimmen.html` von zentriert auf zweispaltig umgestellt (Text links, rundes Foto rechts). Auf dem Foto liegt leicht versetzt (unten links, `left:-20px`) das kompakte ratedo-**Badge** (`ratedo_badge`, `data-type="deluxe2"`, `ratedo-badge.min.js`, max. 180px) — NICHT das große `ratedo-w2`-Widget (das ist eine große Promo-Karte mit Siegel-Medaille, ca. 700px breit, passt nicht als kleines Badge).
Begruendung: Nutzer wollte ein Layout wie ein Referenzbeispiel (Foto + leicht versetztes Bewertungs-Siegel); das kleine Badge-Embed liefert die passende kompakte Optik, das große Widget2 wurde getestet und verworfen (sprengte das Layout).
Betrifft: `website/kundenstimmen.html`, `website/css/styles.css` (`.hero__media`, `.hero__photo`, `.hero__seal`, `.hero__media--box`). Die ratedo-Theming-Variablen (`--ratedo-color-*`) liegen zentral in `:root`, nicht mehr pro Seite inline.
Hinweis: `index.html`-Hero bleibt unverändert (einfache Foto-Box `.hero__media--box`, kein Siegel) — das zweispaltige Foto+Siegel-Layout ist bewusst nur für `kundenstimmen.html`.

## 2026-07-13 - Kundenstimmen-Seite entschlackt
Entscheidung: Auf `kundenstimmen.html` entfernt: das große `ratedo-w2`-Widget im Filter-Abschnitt, der Hero-Lead-Text, die Eyebrows "Community-Feedback"/"Kurs-Feedback"/"1:1 Feedback" samt Icon-Kacheln vor den drei Gruppen-Überschriften, die Eyebrow "Kundenstimmen im Überblick" sowie die YouTube- und Shop-CTA-Bänder am Seitenende.
Begruendung: Vom User ausdrücklich so gewünscht — schlankere, weniger werbliche Seite. Ungenutzte CSS-Klassen (`.group-head__icon`, `.group-head__eyebrow`) wurden mitentfernt.
Betrifft: `website/kundenstimmen.html`, `website/css/styles.css`.

## 2026-07-14 - Newsletter-CTA: neue wiederkehrende Sektion + Encharge-Formular
Entscheidung: Über dem Footer von `kundenstimmen.html` eine neue, wiederkehrend gedachte dunkle Sektion (`.newsletter-cta`) gebaut — linearer Verlauf `to right, #1A293E → #234B79` (bewusst eigener Verlauf, nicht der Hero-Radial-Gradient). Formular per Encharge-Embed (`data-encharge-form-id`) eingebunden, ersetzt das vorherige simple `.cta`-Textband mit Link-Button.
Begruendung: User wollte ein Referenzdesign (Screenshot) mit echtem E-Mail-Formular statt nur einem CTA-Button umsetzen; Encharge ist der vom User genutzte Formular-Anbieter.
Betrifft: `website/kundenstimmen.html`, `website/css/styles.css` (`.newsletter-cta*`), `wissen/wiki/components.md`, `wissen/wiki/design-system.md`.
Details/Nebenentscheidungen:
- Überschrift (`max-width: 860px`) und Begleittext (`max-width: 760px`) sind bewusst breitenbegrenzt, damit sie exakt in 2 bzw. 3 Zeilen umbrechen (per Live-Messung im Browser ausgemessen, keine geratenen Werte).
- Begleittext-Farbe: volles Weiß (`#fff`), nicht abgeschwächt — auf expliziten Wunsch.
- Datenschutz-Link-Hover: `--color-accent` (Orange) statt Weiß.
- Eine dezente CSS-Wellen-Animation im Hintergrund (zwei per `translateX`-Loop bewegte SVG-Wellen, 26s Loop, `prefers-reduced-motion` respektiert) wurde gebaut, dann aber auf Wunsch komplett wieder entfernt. Konsequent zur bestehenden Hero-Linie „keine Bewegung im Hintergrund" (siehe Eintrag „Keine Hero-Animation" oben) — gilt jetzt für beide dunklen Sektionen.
- Der Abstand zwischen Formular-Button und Datenschutz-Hinweis (`.newsletter-cta__legal`) wird zu einem erheblichen Teil vom Encharge-Formular selbst bestimmt (eigenes CSS im Cross-Origin-iFrame, für uns nicht direkt stylebar). Als Annäherung wurde `margin-top: -40px` gesetzt (User hat das Ergebnis als „passt gut" bestätigt). Sauberer wäre eine Anpassung des unteren Abstands direkt im Encharge-Formular-Editor.

## 2026-07-13 - Testimonial-Karten: Hover-Farbe & Schatten
Entscheidung: Hover-Effekt der Testimonial-Karten (`.testimonial:hover`) nutzt `rgba(43, 96, 157, 0.7)` (abgeschwächtes `--color-primary`) als Rahmenfarbe statt vollem `--color-ink` (wie bei `.card:hover`) — bewusst schwächer/weicher. Zusätzlich leichter Schatten `0 8px 24px rgba(20, 47, 78, 0.08)` (gleicher Wert wie beim Nav-Dropdown).
Begruendung: User wollte den gleichen Hover-Effekt wie bei den "Drei Lösungswege"-Karten, aber abgeschwächt; mehrere Abstufungen (100% `--color-primary`, `#E6EEF7`, 45%, 70% Deckkraft) live getestet, 70% war der gewünschte Kompromiss.
Betrifft: `website/css/styles.css` (`.testimonial`, `.testimonial:hover`, `.testimonial__text` margin-bottom für konsistenten Abstand zur Trennlinie).
