# Workflow Management

Commands for managing GitHub Actions workflows.

## Workflow Status

```bash
# Check workflow syntax
python -c "import yaml; yaml.safe_load(open('.github/workflows/ai-task.yml'))"

# Validate all workflows
for f in .github/workflows/*.yml; do
  echo "Validating $f"
  python -c "import yaml; yaml.safe_load(open('$f'))"
done
```

## Update Workflow Diagram

When modifying workflows, update the diagram:

```bash
# Edit the workflow diagram
$EDITOR docs/workflow-diagram.md

# The diagram uses Mermaid syntax
# Update it to reflect any workflow changes
```

## Workflow Permissions

```bash
# Check current permissions in workflows
grep -A5 "permissions:" .github/workflows/*.yml

# Validate permissions are minimal
cat docs/workflow-permissions.md
```

## Test Workflow Locally

```bash
# Install act (GitHub Actions local runner)
brew install act

# List available workflows
act -l

# Run specific workflow (dry run)
act -n -j ai-task

# Note: Some features like GitHub secrets won't work locally
```
