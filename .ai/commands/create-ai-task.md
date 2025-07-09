# Create AI Task

Execute an AI task locally (useful for testing before GitHub workflow).

## Command

```bash
# Execute AI task for a specific issue
./scripts/execute-ai-task.sh ISSUE_NUMBER

# Example with real issue number
./scripts/execute-ai-task.sh 42
```

## Manual Process

```bash
# 1. Create feature branch
git checkout -b feature/ai-task-ISSUE_NUMBER

# 2. Run Claude with issue context
claude "Implement the requirements from GitHub issue #ISSUE_NUMBER"

# 3. Create PR when done
./scripts/create-pr.sh
```

## GitHub Workflow

Alternatively, add `ai-task` label to any GitHub issue to trigger automated implementation.
