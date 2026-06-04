# DIRETTIVE LOCALI — templates

Eredita tutte le regole dal file globale `~/.config/opencode/AGENTS.md`.

## Issue e PR su GitHub

- **Leggi i template** prima di creare issue/PR (`.github/ISSUE_TEMPLATE/`, `.github/pull_request_template.md`)
- **Non cancellare issue:** usa `gh issue edit` per modificare, mai cancellare e ricreare
- **Body complesso via file:** usa un file temporaneo con `--body-file`
- **Usa sempre bash:** invoca `gh issue create` e `gh issue edit` con `bash -c '...'`
