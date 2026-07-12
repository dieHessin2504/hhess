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
