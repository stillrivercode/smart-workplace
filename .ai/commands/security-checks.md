# Security Checks

Run security scans and validations.

## Run Security Scan

```bash
# Full security scan
./scripts/run-security-scan.sh

# AI-powered security review
./scripts/ai-security-review.sh
```

## Security Tools

```bash
# Bandit for Python security
bandit -r scripts/ -f json

# Check for secrets
pre-commit run detect-secrets --all-files

# Dependency check
pip-audit

# YAML security
yamllint .github/workflows/
```

## Token Security

```bash
# Test PAT security
pytest tests/test_pat_security.py -v

# Check for exposed tokens
grep -r "ghp_" . --exclude-dir=venv --exclude-dir=.git
grep -r "github_pat" . --exclude-dir=venv --exclude-dir=.git
```

## Permissions Audit

```bash
# Check workflow permissions
python -c "
import yaml
import glob
for f in glob.glob('.github/workflows/*.yml'):
    with open(f) as file:
        data = yaml.safe_load(file)
        print(f'{f}: {data.get(\"permissions\", \"No explicit permissions\")}')"
```
