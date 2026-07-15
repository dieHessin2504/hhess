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

## 2026-07-14 - Neue Seite `youtube.html`
Entscheidung: Neue Hero-Seite `youtube.html` gebaut (Hero wie `kundenstimmen.html`, aber ohne ratedo-Siegel), verlinkt über den Footer-Punkt „YouTube" (site-weit, vorher `#`-Platzhalter). Aufbau: Hero → Themen-Grid (3×2, `.step`) → Trust-Bar (Kennzahlen) → Kundenstimmen-Wand (YouTube-Kommentare, Marquee) → Newsletter-CTA → Footer.
Begruendung: User wollte eine eigene Landingpage für den YouTube-Kanal mit Abo-CTA.
Betrifft: `website/youtube.html`, `website/css/styles.css`, Footer aller Seiten (`youtube.html`-Link).

## 2026-07-14 - SEO-Status/Title/Description: immer aktiv nachfragen
Entscheidung: Vor dem Setzen von `<meta name="robots">`, Title und Description auf einer Seite wird der User **immer explizit gefragt** (Indexierung ja/nein, plus eigene Vorschläge für Title/Description) statt es selbstständig festzulegen.
Begruendung: Ausdrücklicher User-Wunsch, bewusste Kontrolle über SEO-Indexierung pro Seite zu behalten.
Betrifft: Workflow bei jeder neuen/bearbeiteten Seite, siehe `wiki/seo.md`.

## 2026-07-14 - Themen-Grid statt Klick-Slider
Entscheidung: Der ursprünglich gebaute Klick-Slider für die 5 Themen-Karten (3 sichtbar, Pfeil-Buttons, endlose Schleife über geklonte Karten) wurde komplett verworfen und durch ein statisches 3×2-Grid ersetzt (6. Karte = leere CTA „Das klingt spannend?" mit Button zum Kanal). Wiederverwendet wird die bestehende `.step`-Komponente (bisher nur Service-Seite) statt einer neuen Karten-Klasse.
Begruendung: User wollte ein anderes Layout laut Referenz-Screenshot (statisches Grid statt Slider); `.step` bot bereits genau die gewünschte kompaktere Icon-/Headline-Größe.
Betrifft: `website/youtube.html`, `website/css/styles.css` (`.step`, `.topic-grid*`).

## 2026-07-14 - Trust-Bar: dritter eigener Gradient
Entscheidung: Neue Kennzahlen-Leiste `.trust-bar` mit eigenem linearen Verlauf `var(--color-ink) → var(--color-primary)` (dunkles Navy → helleres Blau), bewusst verschieden von Hero- und Newsletter-CTA-Verlauf. Padding bewusst bei 48px belassen, von der allgemeinen Section-Padding-Erhöhung (siehe unten) ausgenommen.
Begruendung: User wollte „dunkelblau links, hellblau rechts" — kein bereits vorhandener Verlauf passte exakt, daher neuer, aber aus bestehenden Farb-Tokens (`--color-ink`, `--color-primary`) zusammengesetzt statt neuer Hex-Werte. Ein zunächst vom Assistant erfundener eigener Beige-Ton für eine andere Sektion wurde vom User dagegen verworfen zugunsten des bestehenden `--color-bg-page` (siehe Learnings/Changelog) — Grundsatz: wo möglich bestehende Tokens kombinieren statt neue Farben erfinden.
Betrifft: `website/css/styles.css` (`.trust-bar`).

## 2026-07-14 - Site-weite Abstände erhöht (nur helle `.section`-Abschnitte)
Entscheidung: `.section`-Padding von 64px auf 100px erhöht (`--space-20`), Abstand Eyebrow→Headline auf 16px und Headline→Begleittext auf 20px erhöht (`.eyebrow + h1/h2`, `.section-lead`). Gilt zentral über CSS für alle Seiten mit `.section`/`.section-lead`/`.eyebrow`-Klassen. Explizit **ausgenommen**: `.trust-bar` und `.newsletter-cta` (eigene Klassen, eigenes kompakteres Padding) — auf ausdrücklichen User-Wunsch.
Begruendung: User empfand die Abstände generell als zu eng, wollte aber die beiden dunklen Kompakt-Sektionen unverändert lassen.
Betrifft: `website/css/styles.css` (`.section`, `.eyebrow + h1/h2`, `.section-lead`, `--space-20`).

## 2026-07-13 - Testimonial-Karten: Hover-Farbe & Schatten
Entscheidung: Hover-Effekt der Testimonial-Karten (`.testimonial:hover`) nutzt `rgba(43, 96, 157, 0.7)` (abgeschwächtes `--color-primary`) als Rahmenfarbe statt vollem `--color-ink` (wie bei `.card:hover`) — bewusst schwächer/weicher. Zusätzlich leichter Schatten `0 8px 24px rgba(20, 47, 78, 0.08)` (gleicher Wert wie beim Nav-Dropdown).
Begruendung: User wollte den gleichen Hover-Effekt wie bei den "Drei Lösungswege"-Karten, aber abgeschwächt; mehrere Abstufungen (100% `--color-primary`, `#E6EEF7`, 45%, 70% Deckkraft) live getestet, 70% war der gewünschte Kompromiss.
Betrifft: `website/css/styles.css` (`.testimonial`, `.testimonial:hover`, `.testimonial__text` margin-bottom für konsistenten Abstand zur Trennlinie).

## 2026-07-14 - Video-Grid mit Content-Blocker (Zwei-Klick-Lösung)
Entscheidung: Neue Sektion „Beliebte Videos" auf `youtube.html` (zwischen Kundenstimmen-Wand und Newsletter-CTA) mit drei eingebetteten YouTube-Videos. Videos werden NICHT automatisch geladen — Content-Blocker zeigt erst ein Thumbnail + Play-Button, erst nach Klick wird `youtube-nocookie.com` eingebettet. Zustimmung wird in `localStorage` gemerkt (gilt dann für alle drei Videos, auch bei erneutem Seitenaufruf).
Begruendung: User wollte explizit einen Content-Blocker (Datenschutz) statt der Sofort-Einbettung — passt zum bereits in `datenschutz.html` beschriebenen „erweiterten Datenschutzmodus" und war ohnehin als offener Punkt in `memory/INDEX.md` vermerkt.
Betrifft: `website/youtube.html`, `website/css/styles.css` (`.video-card*`), `wiki/components.md`.

## 2026-07-14 - Video-Karten-Layout nach User-Referenzbild
Entscheidung: Karten-Aufbau exakt nach vorgegebenem Referenz-Screenshot umgesetzt: Thumbnail → Titel → Begleittext → Trennlinie → darunter links Foto+Name, rechts CTA-Link. Ursprünglich (vor der Referenz) war der Link noch lose unter dem Text ohne Footer-Trennlinie/Autorenzeile.
Begruendung: User hat ein Referenzbild geliefert und "so bitte" umzusetzen verlangt.
Betrifft: `website/youtube.html`, `website/css/styles.css` (`.video-card__footer`, `.video-card__author*`).

## 2026-07-14 - Video-Karten-Hover korrigiert auf dezent
Entscheidung: `.video-card:hover` zunächst (fälschlich) wie `.card` (starker Hover) gebaut, auf User-Hinweis auf den dezenten `.testimonial`/`.step`-Hover korrigiert.
Begruendung: Reine Kartenanzahl pro Reihe (3 Video-Karten) ist kein verlässliches Unterscheidungskriterium — Testimonials sind ebenfalls 3 pro Reihe und dezent. Regel in `design-system.md` entsprechend präzisiert („im Zweifel dezent").
Betrifft: `website/css/styles.css` (`.video-card:hover`), `wiki/design-system.md`.

## 2026-07-14 - Performance: Google Fonts/Font Awesome async statt render-blockierend
Entscheidung: `@import` von Google Fonts aus `styles.css` entfernt (war seriell render-blockierend: Browser musste erst `styles.css` laden, um den Import überhaupt zu entdecken). Google Fonts + Font Awesome werden jetzt in jedem `<head>` per `rel="preload" as="style" onload="this.rel='stylesheet'"` + `<noscript>`-Fallback geladen, plus `rel="preconnect"` für die drei CDN-Hosts. Musste auf ALLEN 6 Seiten umgesetzt werden (nicht nur `youtube.html`), weil der `@import`-Fix in der gemeinsamen `styles.css` sonst das Laden der Schrift auf den anderen Seiten gebrochen hätte.
Begruendung: User hat einen eigenen Lighthouse/PageSpeed-Report gezeigt — Font Awesome (900ms) und Google Fonts (580ms) waren die größten Render-Blocker und Hauptursache für eine LCP-Render-Verzögerung von 1.760ms beim Hero-Foto. Core Web Vitals sind dem User "enorm wichtig".
Betrifft: `website/css/styles.css` (kein `@import` mehr), `<head>` aller 6 Seiten, `wiki/architecture.md`.

## 2026-07-14 - Inter-Schrift selbst gehostet (kein Google Fonts mehr)
Entscheidung: Statt Google Fonts nur async statt blockierend zu laden (siehe vorheriger Eintrag), wird Inter jetzt komplett selbst gehostet (`assets/fonts/inter-latin.woff2`, `assets/fonts/inter-latin-ext.woff2`). Google Fonts CSS2-API liefert Inter als **Variable Font** — pro angefragtem Subset genau eine Datei, die den gesamten Weight-Bereich 400–800 abdeckt (nicht 5 einzelne Dateien pro Subset). `<link rel="preconnect/preload">` für `fonts.googleapis.com`/`fonts.gstatic.com` komplett aus allen 6 `<head>`s entfernt, zwei `@font-face`-Regeln (Latin/Latin-Extended, per `unicode-range`) in `styles.css` ergänzt.
Begruendung: User hat gezielt nachgefragt, ob man Google Fonts lokal hosten kann. Doppelter Nutzen: Performance (ein Drittanbieter-Roundtrip weniger als bei der reinen Async-Lösung) UND DSGVO (keine IP-Übertragung an Google mehr — Google Fonts extern laden war 2022 Gegenstand eines LG-München-Urteils gegen Websites ohne Consent).
Betrifft: `website/css/styles.css` (`@font-face`), `<head>` aller 6 Seiten, `website/assets/fonts/`, `wiki/architecture.md`.

## 2026-07-14 - Hero-Spaltenverhältnis fix 2:1
Entscheidung: `.hero__grid` von `1.1fr 0.9fr` (≈55:45) auf `grid-template-columns: 2fr 1fr` (exakt 2:1) geändert.
Begruendung: User wollte explizit ein 2/3-zu-1/3-Verhältnis zwischen Text- und Media-Spalte im Hero.
Betrifft: `website/css/styles.css` (`.hero__grid`) — wirkt zentral auf alle zweispaltigen Hero-Layouts (Homepage, Kundenstimmen, YouTube).

## 2026-07-14 - Newsletter-Formular (Encharge) lazy-loaded
Entscheidung: Das Encharge-Embed-Script wird nicht mehr fest im HTML eingebunden, sondern per `IntersectionObserver` erst geladen, wenn die Newsletter-Sektion sich dem Viewport nähert (`rootMargin: 600px`).
Begruendung: User hat einen weiteren Lighthouse-Report gezeigt ("Vermeide die Verkettung kritischer Anfragen") — das Encharge-Script zog beim Seitenaufruf sofort eine Kette weiterer Requests nach sich (Formular-Daten von `forms.encharge.io`, dazu Google Fonts Open Sans/Roboto im Encharge-eigenen iFrame), obwohl die Sektion erst ganz unten auf der Seite sichtbar wird. Damit war die eigentlich schon gelöste "keine Google Fonts mehr"-Frage (siehe Eintrag oben) durch ein Drittanbieter-Embed wieder indirekt zurückgekommen.
Betrifft: `website/youtube.html`, `website/kundenstimmen.html` (beide nutzen `.newsletter-cta`), `wiki/components.md`.

## 2026-07-14 - Font Awesome komplett durch selbst gehostetes SVG-Sprite ersetzt
Entscheidung: Font Awesome (CDN) entfernt, ersetzt durch `assets/icons/sprite.svg` mit den ~21 tatsächlich verwendeten Icons als `<symbol>`. Alle `<i class="fa-...">` in allen 6 Seiten automatisiert auf `<svg class="icon"><use href="...">` umgestellt (Rohdaten von `@fortawesome/fontawesome-free` via jsdelivr geholt, Lizenz CC BY 4.0 im Sprite vermerkt). Visuell identisch — bewusst keine neue Icon-Gestaltung, nur die Hosting-Art geändert.
Begruendung: User zeigte einen Lighthouse-Report mit "18 KiB nicht verwendetes CSS" bei Font Awesome. Geprüft, ob ein Wechsel auf nur `solid.min.css`+`brands.min.css` hilft — bringt kaum etwas (~2 KB), weil die Icon-Glyph-Zuordnungen für ALLE Stile in einer gemeinsamen ~80 KB Basisdatei liegen, unabhängig vom gewählten Stil-Subset. Self-Hosting nur der genutzten Icons war der einzige wirksame Weg (~11 KB statt ~100+ KB, keine Drittanbieter-Requests mehr). Bewusst NICHT das in `design-system.md` als offen markierte "finales Icon-Set" entschieden — das bleibt eine separate Design-Entscheidung, hier wurden nur die bisherigen Font-Awesome-Icons technisch selbst gehostet.
Betrifft: `website/css/styles.css` (`.icon`, `.icon-tile .icon`, `.hero__reassure .icon`), `<head>` aller 6 Seiten (kein `cdnjs.cloudflare.com` mehr), alle 6 Seiten (Icon-Markup), `website/assets/icons/sprite.svg`, `wiki/architecture.md`, `wiki/components.md`, `wiki/design-system.md`.

## 2026-07-14 - CSS-Minifizierung bewusst nicht umgesetzt
Entscheidung: Die von Lighthouse vorgeschlagene CSS-Minifizierung (2 KiB Ersparnis) wird NICHT umgesetzt.
Begruendung: Würde einen Build-Schritt in der bisher bewusst build-losen Vercel-Deployment-Pipeline erfordern (Risiko: Deploy-Konfiguration ändern, ohne live gegen das echte Vercel-Projekt testen zu können) — Aufwand/Risiko steht in keinem Verhältnis zu 2 KiB Ersparnis. User hat dem zugestimmt.
Betrifft: keine Code-Änderung; siehe `wiki/architecture.md` „Offene technische Punkte".

## 2026-07-14 - Hero-Begleittext breiter, Button-Icon-Abstand
Entscheidung: `.hero__lead` von `max-width: 66%` auf `90%` erhöht (Zeilen dürfen länger laufen). `.hh-btn` bekommt `gap: 10px` zwischen Icon und Text (site-weit für alle Buttons mit Icon, z. B. YouTube-Abo-Button).
Begruendung: User fand nach dem 2:1-Spalten-Fix den Begleittext noch zu schmal und das Icon im Button zu eng am Text.
Betrifft: `website/css/styles.css` (`.hero__lead`, `.hh-btn`).

## 2026-07-15 - Trust-Bar: Trennlinien zwischen Kennzahlen (nur Desktop)
Entscheidung: Dezente vertikale 1px-Trennlinien zwischen den drei `.trust-bar__item`s ergänzt (`::before`, `rgba(255,255,255,0.25)`). Auf Mobil (Items stapeln sich) wird die Linie ausgeblendet. Ein Zwischenschritt (zweite Zeile/Label linksbündig statt zentriert) wurde getestet und auf Wunsch wieder auf zentriert zurückgesetzt.
Begruendung: User wollte mehr visuelle Struktur zwischen den Kennzahlen; linksbündige Labels wirkten im Vergleich zu den zentrierten Zahlen unruhig, zentriert war die bessere Optik.
Betrifft: `website/css/styles.css` (`.trust-bar*`).

## 2026-07-15 - Clean URLs (kein `.html` mehr in Live-URLs)
Entscheidung: `website/vercel.json` mit `{ "cleanUrls": true }` angelegt. Alle internen Links in allen 6 Seiten von `xyz.html` auf wurzelrelative, endungslose Pfade umgestellt (`/kundenstimmen`, `/youtube`, `/impressum`, `/datenschutz`, `/website-erstellen-lassen`, Startseite `/`), inkl. Anker-Links (`/#gratis`, `/#kontakt`, `/#newsletter`).
Begruendung: User wollte, dass in der Browserleiste z. B. `hhess.de/youtube` statt `hhess.de/youtube.html` steht. Vercels eingebautes `cleanUrls` löst das ohne Framework-Wechsel; `/xyz.html`-Aufrufe (z. B. alte Bookmarks/Backlinks) leitet Vercel automatisch per 301 auf `/xyz` um, SEO-Signale bleiben erhalten.
Betrifft: `website/vercel.json` (neu), alle 6 Seiten (interne `href`-Attribute), `wiki/architecture.md`. **Wichtig für künftige Seiten/Links:** immer ohne `.html` und mit führendem `/` verlinken.

## 2026-07-15 - Video-Grid: von 3-Spalten-Kartenraster auf horizontale Ein-Spalten-Karten umgebaut
Entscheidung: Das Video-Grid auf `youtube.html` komplett neu layoutet: statt drei nebeneinander stehender Karten (Thumbnail oben, Text unten, Foto+Name-Fußzeile) jetzt volle Breite, Karten untereinander gestapelt, je Karte Video links (16:9, 42% Breite) und Text rechts (Themen-Badge → Titel → Text → „Jetzt anschauen"-Link). Karten-Border/Hover entfernt, dafür dünne Trennlinien zwischen den Karten und vor dem Datenschutz-Hinweis ergänzt (Radius/Overflow-Clipping dafür vom Karten-Container auf den Video-Container verschoben, sonst rundeten sich die Trennlinien an den Kartenecken mit). Unter dem Datenschutz-Hinweis zusätzlich ein zentrierter Abschluss-CTA (identischer Button wie im Hero, mehr vertikales Padding) ergänzt.
Begruendung: User hat ein Referenzbild mit genau diesem horizontalen Karten-Layout (Video links, Badge+Titel+Text+Link rechts) vorgegeben und iterativ Breite (950px → 1100px → wieder volle Standardbreite), Abstände und Trennlinien nachjustiert.
Betrifft: `website/youtube.html`, `website/css/styles.css` (`.video-card*`, `.video-grid*`), `wiki/components.md`. Löst den Eintrag „Video-Karten-Layout nach User-Referenzbild" vom 2026-07-14 ab (dort noch das inzwischen verworfene Karten-Raster-Layout).

## 2026-07-15 - Neue Seiten-Typen: Pre-Confirmation-Seite & Dankeseite (reduzierter Header/Footer)
Entscheidung: Die in `CLAUDE.md` als Ziel genannten `default`/`reduced`-Varianten für Header/Footer wurden erstmals gebaut (`.site-header--reduced`, `.site-footer--reduced`) und zu zwei neuen Seiten-Typen zusammengefasst: **Pre-Confirmation-Seite** (vor der Double-Opt-in-Bestätigung, 3-Schritte-Anleitung) und **Dankeseite** (danach, Erfolgs-Headline + Text, keine Schritte). Beide `noindex, nofollow`, beide nutzen `.page-fill-height`, damit der Footer bei wenig Inhalt am Bildschirmrand bleibt statt mittig zu schweben.
Begruendung: User brauchte mehrere funktionsgleiche Formular-Bestätigungsseiten für unterschiedliche Anmelde-/Kauf-Flows (Newsletter, Freebie, Divi-Masterclass, Website-Audit, Website-Anfrage). Reduzierter Header/Footer lenkt bewusst nicht durch Hauptnavigation/Footer-Spalten vom eigentlichen nächsten Schritt ab.
Betrifft: `website/du-bist-fast-fertig*.html`, `website/lead-magnet-landingpage-vorlagen-fast-fertig.html`, `website/danke-newsletter*.html`, `website/freebie-lead-magnet-landingpage-vorlagen-dankeseite.html`, `website/divi-masterclass-danke-fuer-deinen-kauf.html`, `website/website-audit-kaufbestaetigung.html`, `website/allgemeine-bestaetigung.html`, `website/website-anfrage.html`, `website/css/styles.css` (`.site-header--reduced`, `.site-footer--reduced`, `.page-fill-height`, `.section-head--center/--wide`, `.confirm-visual`, `.confirm-form`), `wiki/components.md`.

## 2026-07-15 - Encharge-Formular-IDs sind bewusst pro Seite/Stelle unterschiedlich
Entscheidung: Jede Formular-Einbindung (`.newsletter-cta`, Hero-Pop-up etc.) bekommt eine **eigene** `data-encharge-form-id` — niemals eine bestehende ID von einer anderen Seite wiederverwenden.
Begruendung: User trackt darüber, über welche Seite/welches Formular die meisten Newsletter-Anmeldungen reinkommen. Eine falsch wiederverwendete ID würde diese Zuordnung verfälschen. Deshalb: Bei jeder neuen Formular-Stelle explizit beim User nach der zu verwendenden ID fragen, nie selbst eine bestehende ID übernehmen oder raten.
Betrifft: alle Seiten mit `.newsletter-cta`/Encharge-Embed, `wiki/components.md` (Liste der aktuell vergebenen IDs).

## 2026-07-15 - Neue Seite `newsletter.html`, Formular als Pop-up statt Inline-Embed
Entscheidung: Inhalt der alten Live-Seite `hhess.de/newsletter` 1:1 in eine neue `newsletter.html` (Hero-Seite) übernommen, aber mit den bestehenden Komponenten nachgebaut statt das WordPress-Markup zu kopieren: 2-spaltiger Hero (wie `youtube.html`) → 6 Themen-Karten (`.step`) → echtes Newsletter-Beispiel-Bild (von der alten Seite heruntergeladen) → FAQ-Akkordeon (neu, natives `<details>`) → Abschluss-CTA (`.newsletter-cta`). Der Hero zeigt **keine** Inline-Formular-Einbettung mehr, sondern einen Button, der ein natives `<dialog>`-Pop-up mit dem Formular öffnet (Blur-Backdrop, Formular-Script lädt erst beim ersten Öffnen).
Begruendung: User wollte zunächst die Seite inhaltlich 1:1 übernommen haben, hat dann iterativ das Formular vom Inline-Hero-Embed auf ein Pop-up umgestellt („richtig geil" als Feedback zum ersten Ergebnis) — sauberer/kompakterer Hero, Formular bleibt trotzdem einen Klick entfernt.
Betrifft: `website/newsletter.html` (neu), `website/css/styles.css` (`.modal*`, `.faq-*`, `.newsletter-example`, `.hero__cta-group`, `.hh-btn--shine`), `website/assets/fotos/hiacynta-hess-newsletter-beispiel.png` (neu), `website/assets/icons/sprite.svg` (Icons `user`, `lightbulb`), `wiki/components.md`, `wiki/design-system.md`.
Nebenentscheidung: Header-Button „Newsletter abonnieren" verlinkt site-weit auf `/newsletter` (vorher Anker zur Seiten-eigenen Inline-Anmeldung) — außer auf `newsletter.html` selbst, dort ist er ein optisch identischer, aber funktionsloser Button (man ist ja schon da).
