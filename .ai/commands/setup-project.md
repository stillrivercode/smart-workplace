# Setup Project

Set up the agentic workflow template in your repository.

## Command

```bash
# Install the template
./install.sh

# Activate virtual environment
source venv/bin/activate

# Install development dependencies
pip install -e ".[dev]"

# Setup GitHub labels
./scripts/setup-labels.sh

# Run tests to verify setup
pytest
```

## Required GitHub Secrets

- `ANTHROPIC_API_KEY` - Your Claude API key
- `GH_PAT` - GitHub Personal Access Token (repo, workflow, write:packages scopes)

## Next Steps

- Configure workflow settings in `.github/workflows/`
- Test AI workflows with `ai-task` labeled issues
