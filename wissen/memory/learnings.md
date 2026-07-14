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

## 2026-07-14 - Neue Karten-Komponente bekam falschen (zu starken) Hover-Effekt
Problem: Für das YouTube-Themen-Grid (`youtube.html`, 6 Karten via `.step`) wurde beim Bau reflexartig der starke `.card`-Hover (`border-color: var(--color-ink)`, kein Schatten) übernommen, obwohl es sich um ein dichtes Karten-Grid handelt.
Ursache: Die in `wiki/design-system.md` dokumentierte Faustregel ("dichtes Grid → dezenter Hover wie `.testimonial`") wurde beim Anlegen der neuen Komponente nicht geprüft — stattdessen einfach die naheliegendste/stärkste Variante genommen.
Lösung: `.step:hover` auf den `.testimonial`-Hover angeglichen: `border-color: rgba(43, 96, 157, 0.7)` + Schatten `0 8px 24px rgba(20, 47, 78, 0.08)`.
Regel: **Vor dem Hinzufügen eines Hover-Effekts auf einer neuen Karten-Komponente immer zuerst `wiki/design-system.md` → "Hover-Konventionen (Cards)" prüfen** und einordnen, ob die Karte eher zu `.card` (wenige, lockere Karten) oder zu `.testimonial`/`.step` (dichtes Grid) gehört — nicht ungeprüft die stärkste Variante übernehmen.
Betrifft: `website/css/styles.css` (`.step:hover`), `wiki/design-system.md`
