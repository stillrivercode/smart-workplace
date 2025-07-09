# Troubleshooting

Common issues and solutions for the agentic workflow template.

## Workflow Not Triggering

```bash
# Check if labels are correctly applied
gh issue view ISSUE_NUMBER

# Verify GitHub secrets are set
gh secret list

# Check Actions tab for errors
gh run list --workflow=ai-task.yml

# View workflow logs
gh run view RUN_ID --log
```

## AI Task Failures

```bash
# Check Claude CLI installation
./dev-scripts/install-claude.sh

# Test Claude CLI
claude --version

# Check API key
echo $ANTHROPIC_API_KEY | head -c 10

# Manual execution for debugging
./scripts/execute-ai-task.sh ISSUE_NUMBER
```

## Permission Errors

```bash
# Check PAT permissions
gh auth status

# Verify PAT has required scopes:
# - repo (full control)
# - workflow (update workflows)
# - write:packages (if using packages)

# Test PAT
curl -H "Authorization: token $GH_PAT" https://api.github.com/user
```

## Cost Issues

```bash
# Check recent workflow runs
gh run list --workflow=ai-task.yml --limit 10

# Calculate approximate costs
# Each run ≈ $0.10-$5.00 depending on complexity

# Set spending limits in workflow
# Edit .github/workflows/ai-task.yml timeout-minutes
```

## Debug Mode

```bash
# Enable debug logging
export ACTIONS_STEP_DEBUG=true
export ACTIONS_RUNNER_DEBUG=true

# Run with verbose output
./scripts/execute-ai-task.sh ISSUE_NUMBER -v
```
