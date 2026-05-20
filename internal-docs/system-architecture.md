# System Architecture

> Internal tracking file. Not published to the live site.
> Update every time the project structure, components, or navigation changes.

Last updated: 2026-05-20

## Stack

- **Framework**: VitePress (latest)
- **Diagrams**: `vitepress-plugin-mermaid` + `mermaid`
- **Search**: VitePress built-in local search (no Algolia key required)
- **Hosting target**: GitHub Pages from the `gh-pages` branch (publish workflow to be added in Phase 2)
- **Base path**: `/GDPR-in-60-minutes/` (matches the GitHub repo slug)

## Directory tree

```
GDPR-in-60-minutes/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mjs              # Main config: nav, sidebar, theme, search
│   │   └── theme/
│   │       ├── index.js            # Theme entry, registers global components
│   │       ├── components/
│   │       │   ├── VideoEmbed.vue  # Responsive 16:9 iframe wrapper
│   │       │   └── ArticleRef.vue  # EUR-Lex citation pill
│   │       └── styles/
│   │           └── custom.css      # Brand palette, dark/light overrides
│   ├── public/
│   │   ├── logo.svg                # Top-bar logo
│   │   └── hero-shield.svg         # Homepage hero image
│   ├── guide/                      # Meta pages (getting started, glossary, resources)
│   ├── modules/                    # Course chapter pages (01..10)
│   └── index.md                    # Homepage (hero layout)
├── internal-docs/                  # This folder, not published
│   ├── system-architecture.md
│   ├── content-registry.md
│   └── gdpr-compliance-mapping.md
├── package.json
└── README.md
```

## Custom components registered globally

| Component name | Purpose | File |
|---|---|---|
| `<VideoEmbed>` | Responsive iframe video wrapper with optional timestamp + caption | `docs/.vitepress/theme/components/VideoEmbed.vue` |
| `<ArticleRef>` | EUR-Lex citation pill linking to official article URL | `docs/.vitepress/theme/components/ArticleRef.vue` |

## Theme behaviour

- `appearance: 'dark'` in config means dark mode is the default.
- Light/dark toggle is rendered by the default VitePress top-bar widget.
- Brand colours follow the EU palette (Reflex Blue `#003399`, Yellow `#ffcc00`).

## Navbar

Top-level items:

1. Home
2. Start Here
3. Modules (dropdown to 10 module pages)
4. Resources
5. Glossary

## Sidebar groups

- `/guide/` → Getting Started group (4 items)
- `/modules/` → Course Modules group (10 items) + Self-Audit Checklists (collapsed)

## Markdown features in use

- Built-in containers: `::: info`, `::: tip`, `::: warning`, `::: danger`, `::: details`
- Mermaid diagrams via plugin (\`\`\`mermaid)
- Task lists (`- [ ]`) for self-audit checklists
- Line-numbered code blocks (enabled globally)

## Phase 2 todo

- [ ] Add `.github/workflows/deploy.yml` to publish to GitHub Pages.
- [ ] Add `404.md` custom page.
- [ ] Wire homepage hero CTA once final video URLs are confirmed.
- [ ] Add `<ComplianceChecklist>` interactive component (Vue + localStorage) if quizzes are approved.
