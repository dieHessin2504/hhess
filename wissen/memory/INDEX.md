# Gedaechtnis - Index

> Kurzer Wegweiser. Details in den verlinkten Dateien. Unter 200 Zeilen halten.

- `decisions.md` - getroffene Entscheidungen + Begruendung
- `changelog.md` - was wann gebaut/geaendert wurde
- `learnings.md` - geloeste Probleme, Fehler die nicht wiederkommen sollen

## Konventionen (Kurzform)
- **Seiten-Typen:** Hero-Seite (`.page-hero`, mit blauer Hero) / Standardseite (`.page-standard`, ohne). Details: `wiki/components.md`.
- **Content-Breiten:** Standard 1300px / schmal 800px (`.container--narrow`). Details: `wiki/design-system.md`.
- **Schriftgrößen:** immer rem (Basis 16px = 1rem). Details: `wiki/design-system.md`.
- **Sektions-Abstände:** `.section`-Padding 100px, Eyebrow→Headline→Text vergrößert — nur helle Abschnitte, NICHT Trust-Bar/Newsletter-CTA. Details: `wiki/design-system.md` „Spacing".
- **Card-Hover:** wenige lockere Karten (`.card`) = starker Hover; dichtes Grid (`.testimonial`, `.step`) = dezenter Hover. Details: `wiki/design-system.md` „Hover-Konventionen".
- **SEO pro Seite:** vor Robots/Title/Description IMMER den User aktiv fragen (mit Vorschlägen). Details: `wiki/seo.md`.
- **Karten-Fließtext:** `<p>` in jeder Karten-Komponente ist 1rem/16px, nie die Standard-Body-Größe. Details: `wiki/design-system.md`.
- **Performance:** Inter ist selbst gehostet (`assets/fonts/`, NIE wieder Google-Fonts-`<link>`/`@import`). Font Awesome NIE per blockierendem `<link>` — immer der async `preload`+`onload`-Block im `<head>` (aus bestehender Seite kopieren). Details: `wiki/architecture.md`.
- **Doku-Routing:** Wissen/Konventionen → `wiki/`; Aussehen/Design → `wiki/design-system.md`; Entscheidungen/Verlauf → `memory/`. (siehe `CLAUDE.md`)

## Offene Punkte / aktueller Fokus (Stand 2026-07-14)
- Website **live** (GitHub `dieHessin2504/hhess` → Vercel, Root Directory `website`).
- Seiten: Homepage, Service, Kundenstimmen, `youtube.html` (Hero-Seiten), Impressum + Datenschutz (Standardseiten). Alle mit normalem Footer, „YouTube"-Footer-Link site-weit auf `youtube.html`.
- Kundenstimmen: Filter-Tabs (Community/Onlinekurse/1:1), zweispaltiger Hero mit Foto + kompaktem ratedo-Siegel (berechtigtes Interesse, siehe decisions). `.newsletter-cta`-Sektion jetzt auf `kundenstimmen.html` UND `youtube.html`, Rollout auf Homepage/Service noch offen. Lokale Vorschau: `npx serve` via `.claude/launch.json` (kein Python vorhanden).
- `youtube.html`: Hero (wie Kundenstimmen, ohne Siegel) → Themen-Grid (3×2, `.step`, statt des zunächst gebauten Klick-Sliders) → Trust-Bar (Kennzahlen, eigener Navy→Blau-Verlauf) → Kundenstimmen-Wand (echte YouTube-Kommentare, gegenläufiger CSS-Marquee) → Video-Grid (3 Videos, Content-Blocker, Platzhalter-IDs) → Newsletter-CTA.
- Nächste Schritte:
  - **Echte YouTube-Video-IDs** für das Video-Grid auf `youtube.html` eintragen (aktuell Platzhalter, siehe `wiki/components.md`).
  - `.newsletter-cta` bei Bedarf auf Homepage/Service ausrollen.
  - Consent-/Content-Blocker für ratedo prüfen (lädt weiterhin externes JS ohne Consent — YouTube-Videos haben seit 14.07. bereits einen Content-Blocker).
  - Echte Fotos + finale Texte/Links (aktuell Platzhalter), Blog/Podcast-Seiten fehlen noch (Footer-Links sind `#`).
  - Domain `hhess.de` anbinden (wenn Inhalte final).
  - Später: Umbau auf Ziel-Stack Next.js (dann Supabase möglich).
