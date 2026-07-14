# Gedaechtnis - Index

> Kurzer Wegweiser. Details in den verlinkten Dateien. Unter 200 Zeilen halten.

- `decisions.md` - getroffene Entscheidungen + Begruendung
- `changelog.md` - was wann gebaut/geaendert wurde
- `learnings.md` - geloeste Probleme, Fehler die nicht wiederkommen sollen

## Konventionen (Kurzform)
- **Seiten-Typen:** Hero-Seite (`.page-hero`, mit blauer Hero) / Standardseite (`.page-standard`, ohne). Details: `wiki/components.md`.
- **Content-Breiten:** Standard 1300px / schmal 800px (`.container--narrow`). Details: `wiki/design-system.md`.
- **Schriftgrößen:** immer rem (Basis 16px = 1rem). Details: `wiki/design-system.md`.
- **Doku-Routing:** Wissen/Konventionen → `wiki/`; Aussehen/Design → `wiki/design-system.md`; Entscheidungen/Verlauf → `memory/`. (siehe `CLAUDE.md`)

## Offene Punkte / aktueller Fokus (Stand 2026-07-14)
- Website **live** (GitHub `dieHessin2504/hhess` → Vercel, Root Directory `website`).
- Seiten: Homepage + Service + Kundenstimmen (Hero-Seiten), Impressum + Datenschutz (Standardseiten). Alle mit normalem Footer.
- Kundenstimmen: Filter-Tabs (Community/Onlinekurse/1:1), zweispaltiger Hero mit Foto + kompaktem ratedo-Siegel (berechtigtes Interesse, siehe decisions). Neue `.newsletter-cta`-Sektion über dem Footer mit Encharge-Formular (siehe `wiki/components.md`) — bisher nur auf dieser Seite, Rollout auf weitere Seiten noch offen. Lokale Vorschau: `npx serve` via `.claude/launch.json` (kein Python vorhanden).
- Nächste Schritte:
  - `.newsletter-cta` bei Bedarf auf weiteren Seiten (Homepage, Service) ausrollen.
  - Consent-/Content-Blocker-Lösung vor Launch (ratedo lädt externes JS ohne Consent).
  - Echte Fotos + finale Texte/Links (aktuell Platzhalter).
  - Domain `hhess.de` anbinden (wenn Inhalte final).
  - Später: Umbau auf Ziel-Stack Next.js (dann Supabase möglich).
