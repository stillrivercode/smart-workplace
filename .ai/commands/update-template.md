# Update Template

Keep your repository synchronized with the latest template updates.

## Update from Template

```bash
# Pull latest changes from template repository
./dev-scripts/update-from-template.sh

# This will:
# 1. Add template as remote if not exists
# 2. Fetch latest changes
# 3. Merge template updates
# 4. Show conflicts if any
```

## Manual Update Process

```bash
# Add template remote
git remote add template https://github.com/stillrivercode/agentic-workflow-template.git

# Fetch template changes
git fetch template

# Merge specific version
git merge template/v1.0.0 --allow-unrelated-histories

# Or cherry-pick specific commits
git cherry-pick COMMIT_HASH
```

## Check for Updates

```bash
# View template releases
gh release list --repo stillrivercode/agentic-workflow-template

# Compare with template
git fetch template
git log --oneline HEAD..template/main

# View update documentation
cat docs/template-updates.md
```

## Conflict Resolution

```bash
# Common conflicts occur in:
# - .github/workflows/
# - CLAUDE.md
# - README.md

# Strategy: Keep your customizations, incorporate new features
git status
git diff
# Manually resolve conflicts
git add .
git commit
```
