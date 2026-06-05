# DIRETTIVE LOCALI — templates

Questo repository è un **template GitHub** per nuovi progetti. Non contiene codice applicativo, solo boilerplate configurabile. Le regole globali in `~/.config/opencode/AGENTS.md` si applicano sempre.

## Comandi

```bash
pnpm lint:check        # ESLint
pnpm lint:fix          # ESLint con fix automatico
pnpm format:check      # Prettier
pnpm format:fix        # Prettier con scrittura
pnpm type-check        # tsc --noEmit
```

Ordine di verifica: `format:check` → `lint:check` → `type-check`.

## Stack

| Strumento  | Versione / Note                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| pnpm       | `9.14.2` (`packageManager` in `package.json`)                                                                                          |
| TypeScript | 3-file Vite pattern: `tsconfig.json` (root), `tsconfig.app.json` (ES2020+DOM, `src/`), `tsconfig.node.json` (ES2022, `vite.config.ts`) |
| ESLint     | Flat config, parser TypeScript, plugin Prettier, React opzionale (blocchi segnati `// [React]`)                                        |
| Prettier   | semi, singleQuote, trailingComma es5, printWidth 80, `prettier-plugin-tailwindcss` incluso                                             |

## Convenzioni repository

- **Conventional Commits obbligatori** (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`) — release-please li usa per versionamento
- **Merge**: solo squash merge via PR, nessun merge commit, history lineare
- **Branch protection su `main`**: PR obbligatoria, branch up-to-date, linear history, auto-delete head branches
- **`release-please` remote branch** (`origin/release-please--branches--main--components--templates`) — gestito automaticamente, **non toccarlo**
- **`.gitignore` è un placeholder** — va sostituito in base allo stack del progetto
- **`eslint.config.js`** — se non si usa React, rimuovere i blocchi `// [React]` (import, plugins, rules, settings)
- **Nessun test framework** configurato di default

## Issue e PR su GitHub

- Leggi sempre i template prima di creare (`.github/ISSUE_TEMPLATE/`, `.github/pull_request_template.md`)
- Non cancellare issue: usa `gh issue edit`
- Body lungo → file temporaneo con `--body-file`
- Usa `bash -c '...'` per `gh issue create` e `gh issue edit` (evita escaping PowerShell)
