---
paths: app/**/*, components/**/*
---

# DSGVO & Barrierefreiheit

## DSGVO
- Datenminimierung; keine externen Dienste laden, bevor Einwilligung vorliegt.
- Consent-Banner vor nicht-essenziellen Skripten; nur essenzielle Cookies ohne Consent.
- Supabase in EU-Region; keine unnoetige Datenweitergabe an Dritte.
- Datenschutzfreundliche Analytics (falls ueberhaupt), keine ungefragten Tracker.

## Barrierefreiheit (WCAG 2.2 AA)
- Vollstaendige Tastaturbedienbarkeit, sichtbarer Fokus, "Skip to content"-Link.
- Ausreichende Farbkontraste; ARIA nur wo semantisches HTML nicht ausreicht.
- Alle Formularfelder mit Labels; Fehlermeldungen zugaenglich; alt-Texte fuer informative Bilder.
