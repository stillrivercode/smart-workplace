# Development Workflow

Standard development workflow commands.

## Pre-commit Setup

```bash
# Install pre-commit hooks
pre-commit install

# Run pre-commit on all files
pre-commit run --all-files

# Update pre-commit hooks
pre-commit autoupdate
```

## Code Quality

```bash
# Python formatting
black scripts/ tests/

# Import sorting
isort scripts/ tests/

# Linting
ruff check scripts/ tests/

# Type checking
mypy scripts/

# All quality checks
pre-commit run --all-files
```

## Branch Management

```bash
# Create feature branch
git checkout -b feature/your-feature

# Create AI task branch
git checkout -b feature/ai-task-ISSUE_NUMBER

# Create fix branch
git checkout -b fix/your-fix

# Push branch
git push -u origin HEAD
```

## PR Creation

```bash
# Create PR with commit changes
./scripts/commit-changes.sh
./scripts/push-changes.sh
./scripts/create-pr.sh

# Or use GitHub CLI
gh pr create --title "Your PR title" --body "Description"

# Create draft PR
gh pr create --draft
```
