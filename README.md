# templates

![GitHub Release](https://img.shields.io/github/v/release/Smailen5/templates?style=flat-square&logo=github)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Smailen5/templates?style=flat-square&logo=github)

Template GitHub per nuovi progetti. Standardizza il tooling iniziale (linting, formattazione, TypeScript, issue/PR template) così da evitare di reimpostare tutto da zero ogni volta.

## Struttura del progetto

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.yaml          # Segnalazione bug
│   │   ├── feat.yaml         # Richiesta nuova funzionalità
│   │   ├── docs.yaml         # Richiesta aggiornamento documentazione
│   │   ├── refactor.yaml     # Richiesta refactoring
│   │   ├── test.yaml         # Richiesta test
│   │   └── config.yml        # Disabilita issue vuote
│   ├── workflows/
│   │   ├── opencode.yml      # Workflow AI per PR e issue
│   │   └── release-please.yml  # Automazione versioni e rilascio
│   └── pull_request_template.md
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── LICENSE
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── README.md
```

## File e cartelle

### `.github/ISSUE_TEMPLATE/` — Issue template

Template YAML allineati ai Conventional Commits:

| File | Titolo | Label | Cosa richiede |
|------|--------|-------|---------------|
| `bug.yaml` | `bug:` | `bug` | Descrizione, riproduzione, log/stack trace |
| `feat.yaml` | `feat:` | `feature`, `enhancement` | Criteri di accettazione, task list |
| `docs.yaml` | `docs:` | `documentation` | Doc mancante o obsoleta |
| `refactor.yaml` | `refactor:` | `refactor` | Struttura, performance, modularità |
| `test.yaml` | `test:` | `test` | Copertura, scenari, task |

`config.yml` disabilita la creazione di issue vuote — si usano solo i template.

### `.github/workflows/opencode.yml` — AI agent automatico

Workflow GitHub Actions che esegue **opencode** (AI agent) su issue e PR quando un commento contiene `/oc` o `/opencode`. Per il setup vedi la sezione dedicata più sotto.

### `.github/pull_request_template.md` — Template PR

Struttura standard: Descrizione, Riferimenti Issue, Modifiche Effettuate, Checklist.

### `.gitignore`

Placeholder generico. Sostituiscilo con un `.gitignore` adatto al tuo stack (es. Node, Python).

### `.prettierrc` — Configurazione formattazione

Regole base di Prettier + plugin `prettier-plugin-tailwindcss`:

- semi, single quote, trailing comma es5, print width 80, tab width 2
- Override per YAML (print width 120)
- Override per Markdown (print width 100, prose wrap preserve)

### `.prettierignore` — Esclusioni formattazione

Esclude da Prettier: `node_modules`, `dist`, `build`, `.netlify`, `.github`, `pnpm-lock.yaml`, `routeTree.gen.ts` e altri.

### `eslint.config.js` — Linting

Flat config con:

- **Parser**: TypeScript (`@typescript-eslint/parser`)
- **Plugin**: Prettier, TypeScript, **React** (opzionale — segnato con `// [React]`)
- **Regole**: `no-unused-vars` (error), `no-explicit-any` (warn), `prettier/prettier` (warn)

### `package.json` — Project config

- **Package manager**: `pnpm@9.14.2`
- **Scripts**:
  - `lint:check` / `lint:fix` — ESLint
  - `format:check` / `format:fix` — Prettier
  - `type-check` — `tsc --noEmit`

Nessuna dipendenza inclusa. Le installi tu in base al progetto.

### `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript

Pattern standard Vite a 3 file:

| File | Target | Include |
|------|--------|---------|
| `tsconfig.json` | — | Root, collega i due riferimenti |
| `tsconfig.app.json` | ES2020 + DOM + jsx | `src/` |
| `tsconfig.node.json` | ES2022 | `vite.config.ts` |

### `LICENSE`

Licenza MIT.

## Tooling stack

Il template fornisce la base per:

| Strumento | Cosa fa |
|-----------|---------|
| **pnpm** | Package manager veloce |
| **TypeScript** | Controllo statico dei tipi |
| **ESLint** | Analisi statica del codice |
| **Prettier** | Formattazione automatica |
| **opencode** | AI agent su GitHub Actions |

## Come utilizzare questo template

### Nuovo progetto da template

1. Su GitHub, clicca **"Use this template"** sul repository.
2. Seleziona owner e nome del nuovo repository.
3. Clona il repository in locale e installa le dipendenze:
   ```bash
   pnpm install
   ```
4. Modifica `package.json`:
   - `"name"` — metti il nome del progetto
   - `"version"`: `"0.0.0"` → aggiorna se necessario
5. Configura il repository su GitHub (protezione branch, ecc.) — vedi sezione dedicata.

### Progetto esistente

Copia i file che ti servono:

```powershell
git clone https://github.com/Smailen5/templates.git
xcopy /E /I templates\.github C:\tuo-progetto\.github
xcopy templates\.prettierrc C:\tuo-progetto\
xcopy templates\.prettierignore C:\tuo-progetto\
xcopy templates\eslint.config.js C:\tuo-progetto\
xcopy templates\package.json C:\tuo-progetto\
xcopy templates\tsconfig*.json C:\tuo-progetto\
```

Oppure scarica singolarmente i file dalla pagina GitHub.

## Sezioni rimovibili

Non tutti i progetti usano lo stesso stack. Ecco cosa togliere in base alle tue esigenze.

### Se non usi React

In `eslint.config.js` rimuovi tutto ciò che è segnato con `// [React]`:

1. Le import: `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
2. Nel blocco `plugins`: le righe `react`, `"react-hooks"`, `"react-refresh"`
3. Nel blocco `rules`: `...react.configs.recommended.rules`, `...reactHooks.configs.recommended.rules`
4. Le regole React: `react/react-in-jsx-scope`, `react/prop-types`, ecc.
5. Il blocco `settings: { react: { version: "detect" } }`

### Se non usi TypeScript

1. Elimina `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
2. In `package.json` rimuovi lo script `type-check`
3. In `eslint.config.js` rimuovi il parser TypeScript e il plugin `@typescript-eslint`
4. Aggiorna `.gitignore` (rimuovi righe TypeScript-specifiche se presenti)

### Se non usi Tailwind CSS

1. In `.prettierrc` rimuovi `"prettier-plugin-tailwindcss"` dalla lista `plugins`

### Se non usi pnpm

1. In `package.json` rimuovi o modifica il campo `packageManager`
2. Usa `npm install` o `yarn` al posto di `pnpm install`

## Workflow opencode

Il file `.github/workflows/opencode.yml` integra **opencode**, un AI agent che risponde ai comandi su issue e PR.

### Come funziona

Il workflow si attiva quando pubblichi un commento che contiene `/oc` o `/opencode` su una issue o PR. L'agente:

1. Legge il contesto della issue/PR
2. Esegue il task richiesto (modificare codice, scrivere doc, fare review, ecc.)
3. Pubblica il risultato come commento nella issue/PR

### Comandi supportati

Scrivi in un commento su una issue o PR:

```
/oc aggiungi una sezione FAQ al README
/opencode rivedi questa PR e fammi un riepilogo delle modifiche
```

### Setup del token

Per funzionare, il workflow ha bisogno di un **API key di DeepSeek** (o del provider che preferisci) salvata come secret nel repository.

1. Vai su [DeepSeek Platform](https://platform.deepseek.com/api-keys) e genera un API key.
2. Su GitHub, vai in **Settings > Secrets and variables > Actions** del tuo repository.
3. Clicca **"New repository secret"** e crea:
   - **Name**: `DEEPSEEK_API_KEY`
   - **Secret**: incolla la chiave generata
4. Il workflow la userà automaticamente tramite `${{ secrets.DEEPSEEK_API_KEY }}`.

### Costi

Il workflow usa `deepseek/deepseek-v4-flash` che ha un costo molto basso. Con un uso normale (decine di task al mese) la spesa è trascurabile (centesimi di dollaro).

### Personalizzazione

Se vuoi cambiare modello o provider, modifica il file `.github/workflows/opencode.yml`:

```yaml
- name: Run opencode
  uses: anomalyco/opencode/github@latest
  env:
    YOUR_API_KEY: ${{ secrets.YOUR_API_KEY }}
  with:
    model: provider/modello-desiderato
    prompt: |
      Quando fai commit, usa i Conventional Commits senza scope.
      Prefissi: feat, fix, docs, chore, refactor, test.
      Scrivi i messaggi in italiano.
```

Cambia `DEEPSEEK_API_KEY` con la variabile del tuo provider, `model` con l'ID del modello e `prompt` con le istruzioni che preferisci per l'agente.

## Workflow release-please

Il file `.github/workflows/release-please.yml` automatizza la gestione delle versioni del progetto.

### Come funziona

A ogni push sul branch `main`, release-please analizza i commit usando i Conventional Commits per determinare il tipo di incremento di versione (patch, minor, major). Poi apre o aggiorna una **Release PR** che:

- Propone il nuovo numero di versione
- Aggiorna `package.json` con la versione
- Genera il `CHANGELOG.md` basato sui commit
- Crea una GitHub Release quando la PR viene mergiata

### Come usarlo

1. Scrivi i commit usando i **Conventional Commits** (es. `feat:`, `fix:`, `docs:`).
2. Quando vuoi rilasciare, vai su GitHub e apri la Release PR creata da release-please.
3. Verifica il changelog e la versione proposta.
4. Se tutto ok, mergia la PR. release-please creerà automaticamente il tag e la GitHub Release.

### Personalizzazione

Se vuoi configurare branch aggiuntivi o release-type diversi, modifica il file:

```yaml
- uses: googleapis/release-please-action@v4
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    release-type: node
    # Altre opzioni: python, terraform, simple, ecc.
```

Per configurazioni più avanzate (es. monorepo, path multipli), aggiungi un file `release-please-config.json` nella root del progetto.

## Configurazione repository

Le impostazioni di GitHub **non vengono ereditate** dal template. Su ogni nuovo repository vanno configurate manualmente.

### Permessi workflow (obbligatorio per release-please)

**Settings > Actions > General > Workflow permissions**:

- ☑ **"Read and write permissions"**
- ☑ **"Allow GitHub Actions to create and approve pull requests"**

Senza questa impostazione, workflow come release-please non possono creare PR.

### Impostazioni pull request

**Settings > General > Pull Requests**:

- ☑ **"Always suggest updating pull request branches"**
- ☑ **"Automatically delete head branches"**
- **"Pull request permissions"**: Only collaborators

### Impostazioni merge button

**Settings > General > Merge button**:

- ❌ **"Allow merge commits"** — disabilita
- ❌ **"Allow rebase merging"** — disabilita
- **"Default commit message"**: Pull request title

### Protezione del branch `main`

Usa la **classica branch protection rule** (non Rulesets):

1. **Settings > Branches > Branch protection rules** → "Add branch protection rule"
2. **Branch name pattern**: `main`
3. Spunta:
   - ☑ **"Require a pull request before merging"**
   - ☑ **"Require branches to be up to date before merging"**
   - ☑ **"Require status checks to pass before merging"** (se hai CI)
4. Nella sezione **"Rules applied to everyone including administrators"**:
   - ☑ **"Do not allow bypassing the above settings"**
   - ☑ **"Require linear history"**
5. **"Lock branch"** — lascialo **spento** (blocca main completamente)
6. Salva.

Con questa configurazione:
- Nessuno pusha direttamente su `main`
- Ogni modifica passa da una PR
- Serve almeno una review approvata per fare merge

## Licenza

Distribuito con licenza MIT. Vedi [LICENSE](LICENSE) per i dettagli.
