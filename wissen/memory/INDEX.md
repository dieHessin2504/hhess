# Gedaechtnis - Index

> Kurzer Wegweiser. Details in den verlinkten Dateien. Unter 200 Zeilen halten.

- `decisions.md` - getroffene Entscheidungen + Begruendung
- `changelog.md` - was wann gebaut/geaendert wurde
- `learnings.md` - geloeste Probleme, Fehler die nicht wiederkommen sollen

## Konventionen (Kurzform)
- **Seiten-Typen:** Hero-Seite (`.page-hero`, mit blauer Hero) / Standardseite (`.page-standard`, ohne) / Pre-Confirmation-Seite (reduzierter Header/Footer + `.page-fill-height`, vor Double-Opt-in-Bestätigung) / Dankeseite (gleicher Aufbau, aber nach der Bestätigung). Details: `wiki/components.md`.
- **Content-Breiten:** Standard 1300px / schmal 800px (`.container--narrow`). Details: `wiki/design-system.md`.
- **Schriftgrößen:** immer rem (Basis 16px = 1rem). Details: `wiki/design-system.md`.
- **Sektions-Abstände:** `.section`-Padding 100px, Eyebrow→Headline→Text vergrößert — nur helle Abschnitte, NICHT Trust-Bar/Newsletter-CTA. Details: `wiki/design-system.md` „Spacing".
- **Card-Hover:** wenige lockere Karten (`.card`) = starker Hover; dichtes Grid (`.testimonial`, `.step`) = dezenter Hover. Details: `wiki/design-system.md` „Hover-Konventionen".
- **SEO pro Seite:** vor Robots/Title/Description IMMER den User aktiv fragen (mit Vorschlägen). Details: `wiki/seo.md`.
- **Karten-Fließtext:** `<p>` in jeder Karten-Komponente ist 1rem/16px, nie die Standard-Body-Größe. Details: `wiki/design-system.md`.
- **Performance:** Inter (`assets/fonts/`) und Icons (`assets/icons/sprite.svg`) sind selbst gehostet — NIE wieder Google-Fonts-`<link>`/`@import` oder Font-Awesome-CDN einbinden. Neues Icon: SVG von jsdelivr holen und als `<symbol>` in `sprite.svg` ergänzen. Details: `wiki/architecture.md`, `wiki/components.md`.
- **Doku-Routing:** Wissen/Konventionen → `wiki/`; Aussehen/Design → `wiki/design-system.md`; Entscheidungen/Verlauf → `memory/`. (siehe `CLAUDE.md`)
- **Encharge-Formular-IDs:** jede Formular-Stelle hat ihre EIGENE `data-encharge-form-id` (User trackt Anmeldequelle) — bei neuer Stelle immer erst beim User nachfragen, nie eine bestehende ID wiederverwenden. Details: `wiki/components.md` „Newsletter-CTA".
- **Animation-Ausnahme:** `.hh-btn--shine` (Schatten + Glanz-Sweep) auf einzelnen Haupt-CTAs ist erlaubt, Hintergrund-/Flächen-Bewegung (Hero/Newsletter-CTA/Trust-Bar) bleibt tabu. Details: `wiki/design-system.md`.

## Offene Punkte / aktueller Fokus (Stand 2026-07-15)
- Website **live** (GitHub `dieHessin2504/hhess` → Vercel, Root Directory `website`).
- **Hero-Seiten:** Homepage, Service, Kundenstimmen, `youtube.html`, `newsletter.html`. **Standardseiten:** Impressum, Datenschutz. Alle mit normalem Footer + Header (dessen „Newsletter abonnieren"-Button site-weit auf `/newsletter` verlinkt, siehe `wiki/components.md`).
- **Pre-Confirmation-Seiten** (reduzierter Header/Footer, `noindex`): `du-bist-fast-fertig.html`, `du-bist-fast-fertig-yt.html`, `lead-magnet-landingpage-vorlagen-fast-fertig.html`.
- **Dankeseiten** (reduzierter Header/Footer, `noindex`): `danke-newsletter.html`, `danke-newsletter-youtube.html`, `freebie-lead-magnet-landingpage-vorlagen-dankeseite.html`, `divi-masterclass-danke-fuer-deinen-kauf.html`, `website-audit-kaufbestaetigung.html`, `allgemeine-bestaetigung.html`, `website-anfrage.html`.
- `newsletter.html`: Hero (2-spaltig wie `youtube.html`, Formular als Pop-up statt Inline-Embed) → 6 Themen-Karten → echtes Newsletter-Beispiel-Bild → FAQ-Akkordeon → Abschluss-CTA. Details: `wiki/components.md` „newsletter.html — Seitenstruktur".
- Kundenstimmen: Filter-Tabs (Community/Onlinekurse/1:1), zweispaltiger Hero mit Foto + kompaktem ratedo-Siegel (berechtigtes Interesse, siehe decisions). Lokale Vorschau: `npx serve` via `.claude/launch.json` (kein Python vorhanden).
- `youtube.html`: Hero → Themen-Grid (3×2, `.step`) → Trust-Bar → Kundenstimmen-Wand (Marquee) → Video-Grid (Content-Blocker, Platzhalter-IDs) → Newsletter-CTA.
- Nächste Schritte:
  - **Echte YouTube-Video-IDs** für das Video-Grid auf `youtube.html` eintragen (aktuell Platzhalter, siehe `wiki/components.md`).
  - `.newsletter-cta` bei Bedarf auf Homepage/Service ausrollen.
  - Consent-/Content-Blocker für ratedo prüfen (lädt weiterhin externes JS ohne Consent — YouTube-Videos haben seit 14.07. bereits einen Content-Blocker).
  - Echte Fotos + finale Texte/Links (aktuell Platzhalter), Blog/Podcast-Seiten fehlen noch (Footer-Links sind `#`).
  - Domain `hhess.de` anbinden (wenn Inhalte final).
  - Später: Umbau auf Ziel-Stack Next.js (dann Supabase möglich).
