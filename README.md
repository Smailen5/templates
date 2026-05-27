# templates

Template GitHub per nuovi repository. Include una struttura standardizzata di issue template, pull request template, gitignore e licenza, adattabile a qualsiasi progetto.

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
│   └── pull_request_template.md  # Template per PR
├── .gitignore                # Regole generali per il progetto
├── LICENSE                   # Licenza MIT
└── README.md                 # Questo file
```

### `.github/ISSUE_TEMPLATE/`

Cinque template issue in formato YAML, ciascuno con i campi obbligatori allineati ai Conventional Commits:
- **bug.yaml** — titolo `bug:`, label `bug`, campi per descrizione, riproduzione, log.
- **feat.yaml** — titolo `feat:`, label `feature/enhancement`, criteri di accettazione e task list.
- **docs.yaml** — titolo `docs:`, label `documentation`, per doc mancante o obsoleta.
- **refactor.yaml** — titolo `refactor:`, label `refactor`, focus su miglioramento strutturale.
- **test.yaml** — titolo `test:`, label `test`, per copertura e nuovi test.

`config.yml` disabilita la creazione di issue vuote, forzando l'uso dei template.

### `.github/pull_request_template.md`

Template PR con sezioni per descrizione, riferimenti all'issue, modifiche effettuate e checklist di controllo.

### `.gitignore`

### `LICENSE`

Licenza MIT standard.

## Come utilizzare questo template

### Nuovo progetto

1. Su GitHub, clicca **"Use this template"** in cima alla pagina del repository.
2. Seleziona l'owner e dai un nome al nuovo repository.
3. Il nuovo repo erediterà solo i file, **non** le impostazioni di GitHub (protezione branch, template flag, ecc.).

### Progetto esistente

Copia manualmente i file desiderati:

```powershell
# Copiare la struttura .github
git clone https://github.com/Smailen5/templates.git
xcopy /E /I templates\.github C:\percorso\tuo-progetto\.github
xcopy templates\.gitignore C:\percorso\tuo-progetto\
xcopy templates\LICENSE C:\percorso\tuo-progetto\
```

Oppure scarica singolarmente i file dalla pagina GitHub.

## Configurazione repository

Le impostazioni di GitHub **non vengono ereditate** dal template. Su ogni nuovo repository vanno configurate manualmente.

### Abilita come template repository

1. Vai su **Settings > General**.
2. Nella sezione **Repository metadata**, spunta **"Template repository"**.
3. Questo permette ad altri di usare "Use this template" sul tuo repo.

### Impostazioni pull request e merge

1. Vai su **Settings > General > Pull Requests**.
2. Configura:
   - ☑ **"Always suggest updating pull request branches"**
   - ☑ **"Automatically delete head branches"**
3. In **"Pull request permissions"** seleziona **"Only collaborators"**.

### Impostazioni merge button

1. Vai su **Settings > General > Merge button**.
2. Disabilita:
   - ❌ **"Allow merge commits"**
   - ❌ **"Allow rebase merging"**
3. In **"Default commit message"** seleziona **"Pull request title"**.

### Protezione del branch `main`

Usa la **classica branch protection rule** (non Rulesets):

1. Vai su **Settings > Branches > Branch protection rules**.
2. Clicca **"Add branch protection rule"**.
3. In **"Branch name pattern"** inserisci `main`.
4. Spunta:
   - ☑ **"Require a pull request before merging"**
   - ☑ **"Require branches to be up to date before merging"**
   - ☑ **"Require status checks to pass before merging"** (se ci sono CI)
5. Nella sezione **"Protect matching branches"**:
   - ☑ **"Do not allow bypassing the above settings"**
6. Nella sezione **"Rules applied to everyone including administrators"**:
   - ☑ **"Require linear history"** per evitare merge commit e mantenere una cronologia pulita.
7. **"Lock branch"** lascialo **spento** — blocca main rendendolo read-only e impedirebbe anche i merge via PR.
8. Salva la regola.

## Licenza

Distribuito con licenza MIT. Vedi [LICENSE](LICENSE) per i dettagli.
