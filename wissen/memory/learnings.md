# Learnings

Geloeste Probleme und Regeln, die sich daraus ergeben - damit derselbe Fehler nicht zweimal passiert.

## 2026-07-13 - CSS-Sibling-Selektor ignoriert `hidden`-Attribut → Layout-Sprung
Problem: Auf `kundenstimmen.html` sprang beim Wechseln der Filter-Tabs der Inhalt, Überschriften standen je nach Filter auf unterschiedlicher Höhe.
Ursache: `.ks-panel + .ks-panel { margin-top: ... }` matched rein nach DOM-Reihenfolge — der Selektor ignoriert, ob das vorherige Geschwister-Element `hidden`/`display:none` ist. Ein ausgeblendetes Panel "zählt" für den Selektor trotzdem als vorheriges Geschwister.
Lösung: `:not([hidden])` in den Selektor aufnehmen, damit der Abstand nur greift, wenn das vorherige Panel wirklich sichtbar ist: `.ks-panel:not([hidden]) ~ .ks-panel:not([hidden])`.
Regel: Bei ein-/ausblendbaren Listen-/Grid-Elementen (Filter, Tabs, Akkordeons) IMMER `:not([hidden])` (bzw. die entsprechende Sichtbarkeits-Klasse) in Nachbar-Selektoren für Abstände einbauen — sonst verstecken sich Layout-Bugs, die erst beim Durchklicken auffallen.
Betrifft: `website/css/styles.css` (`.ks-panel`)

## 2026-07-13 - Lokale Vorschau: kein Python installiert
Problem: `preview_start` mit `python -m http.server` schlägt fehl (Windows-Store-Alias, kein echtes Python installiert).
Lösung: Stattdessen `npx --yes serve website -l 8080` in `.claude/launch.json` — Node/npx sind vorhanden.
Betrifft: `.claude/launch.json`
