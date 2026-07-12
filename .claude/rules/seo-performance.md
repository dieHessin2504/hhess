---
paths: app/**/*, next-sitemap.config.*, app/sitemap.ts, app/robots.ts
---

# SEO & Performance - Standard

## SEO
- Semantisches HTML5, genau eine `<h1>` pro Seite, logische Ueberschriftenhierarchie.
- Vollstaendige Metadaten ueber die Next.js Metadata API: Title, Description, Canonical, Open Graph, Twitter Cards.
- Strukturierte Daten als JSON-LD (schema.org) passend zum Seitentyp.
- `app/sitemap.ts` und `app/robots.ts` pflegen; sprechende, stabile URLs.
- Aussagekraeftige `alt`-Texte, sinnvolle interne Verlinkung, `lang`-Attribut gesetzt.
- Projekt-spezifische SEO-Konventionen: siehe `wissen/wiki/seo.md`.

## Performance (Core Web Vitals: LCP, INP, CLS)
- Bilder ausschliesslich ueber `next/image` (moderne Formate, Lazy Loading, feste Dimensionen gegen Layout-Shift).
- Schriften ueber `next/font` (selbst gehostet, kein externer Font-Request).
- JavaScript minimieren, Server Components bevorzugen, Code-Splitting nutzen.
- Keine render-blockierenden Ressourcen; sinnvolle Caching-Strategien.
