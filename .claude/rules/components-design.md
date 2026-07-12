---
paths: components/**/*, app/**/*.tsx, tailwind.config.*
---

# Komponenten & Design-System

- Vor dem Bauen einer Komponente: `wissen/wiki/components.md` und `wissen/wiki/design-system.md` pruefen.
- Wiederkehrende Elemente (Header/Footer default+reduced, Buttons, Cards, Sections, Formulare) immer wiederverwenden, nie duplizieren.
- Alle Werte (Farben, Spacing, Typografie, Radien) aus zentralen Design-Tokens ziehen - keine Magic Numbers inline.
- Neue Komponente = neuer Eintrag im Wiki (nur auf meinen Befehl "ins Wiki").
- Responsive, Mobile-First. Zustaende (hover/focus/disabled/loading/error) mitdenken.
