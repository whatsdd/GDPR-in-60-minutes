# Tools

Small helper scripts used during content production.

## generate-checklists.py

Generates the three Excel templates linked from the Playbook chapters:

- `docs/public/checklists/dsar-log.xlsx`
- `docs/public/checklists/breach-triage.xlsx`
- `docs/public/checklists/vendor-register.xlsx`

Run from the repo root:

```bash
python -m pip install openpyxl
python tools/generate-checklists.py
```

Re-running the script overwrites the three files. The output is intended
to be deterministic enough that an unchanged template produces the same
binary, so commits stay clean.
