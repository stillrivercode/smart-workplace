# Label Management

Manage GitHub labels for AI workflows.

## Setup Labels

```bash
# Create all required labels
./scripts/setup-labels.sh

# This creates:
# - ai-task (triggers AI implementation)
# - ai-bug-fix (AI bug fixes)
# - ai-refactor (AI refactoring)
# - ai-test (AI test generation)
# - ai-docs (AI documentation)
# - ai-completed (task completed)
# - ai-error (task failed)
# - ai-review-needed (needs human review)
```

## Label Usage

```bash
# Add label to issue (requires gh CLI)
gh issue edit ISSUE_NUMBER --add-label "ai-task"

# Remove label
gh issue edit ISSUE_NUMBER --remove-label "ai-task"

# List issues with specific label
gh issue list --label "ai-task"

# View all labels
gh label list
```

## Custom Labels

```bash
# Create custom AI label
gh label create "ai-security" --description "AI security analysis" --color "FF0000"

# Update label
gh label edit "ai-task" --color "00FF00" --description "Updated description"

# Delete label
gh label delete "old-label"
```

## Label Workflow Triggers

- `ai-task` → Triggers AI implementation workflow
- `ai-fix-lint` → Triggers lint fix workflow
- `ai-fix-security` → Triggers security fix workflow
- `ai-fix-tests` → Triggers test fix workflow
