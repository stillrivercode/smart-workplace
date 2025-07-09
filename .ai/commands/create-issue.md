# Create Issue Command

Create GitHub issues with optional labels and automation triggers. The `ai-task` label is **NOT** automatically added.

## Features

- **Manual Label Control**: No automatic `ai-task` label addition
- **Interactive Mode**: Guided issue creation with prompts
- **Label Validation**: Warns about non-existent labels
- **Dry Run Mode**: Preview before creation
- **Prerequisite Validation**: Checks GitHub CLI and authentication
- **AI Integration**: Optional explicit opt-in for AI workflows

## Usage Examples

```bash
# Basic issue creation
npx @stillrivercode/shared-commands create-issue -t "Fix login bug" -b "Users cannot log in with valid credentials"

# Issue with labels (manual ai-task)
npx @stillrivercode/shared-commands create-issue -t "Add user auth" -l "feature,backend" -b "Implement JWT authentication"

# Explicit AI task (opt-in required)
npx @stillrivercode/shared-commands create-issue -t "Refactor database layer" --ai-task -b "Clean up database connections"

# Interactive mode for guided creation
npx @stillrivercode/shared-commands create-issue -i

# Dry run to preview without creating
npx @stillrivercode/shared-commands create-issue -t "Test issue" --dry-run

# Full example with all options
npx @stillrivercode/shared-commands create-issue \
  -t "Implement user dashboard" \
  -b "Create responsive user dashboard with analytics" \
  -l "feature,frontend,priority-high" \
  -a "developer-username" \
  --ai-task
```

## Command Options

### Required

- `-t, --title TITLE` - Issue title (required)

### Optional

- `-b, --body BODY` - Issue description/body
- `-l, --labels LABELS` - Comma-separated labels
- `-a, --assignee USER` - Assign to GitHub user
- `-m, --milestone NUMBER` - Milestone number
- `--ai-task` - **Explicit opt-in** to add ai-task label
- `--dry-run` - Preview without creating
- `-i, --interactive` - Interactive guided mode
- `-h, --help` - Show help information

## Label Categories

### Standard Labels

- `feature`, `bug`, `enhancement`, `documentation`, `question`
- `good-first-issue`, `help-wanted`

### Priority Labels

- `priority-high`, `priority-medium`, `priority-low`

### AI Workflow Labels (Manual Opt-in)

- `ai-task` - General AI development tasks
- `ai-bug-fix` - AI-assisted bug fixes
- `ai-refactor` - Code refactoring requests
- `ai-test` - Test generation
- `ai-docs` - Documentation updates

### Technical Area Labels

- `backend`, `frontend`, `api`, `database`, `security`

## AI Task Integration

### Manual Opt-in Required

The script **does not** automatically add the `ai-task` label. Users must:

1. **Explicitly use `--ai-task` flag**
2. **Include `ai-task` in `--labels` list**
3. **Choose to add it in interactive mode**

### AI Workflow Trigger

When `ai-task` label is explicitly added:

- Triggers automated AI implementation workflow
- Creates feature branch automatically
- Generates pull request with implementation
- Estimated timeline: 5-15 minutes

## Interactive Mode

The interactive mode provides guided issue creation:

```bash
./scripts/create-issue.sh -i
```

Interactive flow:

1. **Title prompt** - Required field
2. **Description input** - Multi-line or editor support
3. **Label selection** - Suggestions provided
4. **AI task confirmation** - Explicit yes/no for ai-task label
5. **Assignee selection** - Optional
6. **Preview and confirmation** - Review before creation

## Prerequisites

- **GitHub CLI (gh)** - Must be installed and authenticated
- **Git repository** - Must be run from within a git repo
- **Issues enabled** - Repository must have Issues feature enabled

## Validation and Safety

### Input Validation

- Title is required and validated
- GitHub CLI authentication checked
- Repository Issues feature verified
- Label existence warnings (but doesn't block)

### Security Features

- No automatic label addition
- Explicit user consent for AI workflows
- Dry run mode for safe testing
- Clear warnings about AI trigger implications

## Output Examples

### Successful Creation

```text
✅ Issue created successfully!
   URL: https://github.com/user/repo/issues/42
   Issue #: 42

🤖 AI Task Workflow:
   The ai-task label will trigger automated AI implementation
   Monitor progress in the Actions tab of your repository
   Expected timeline: 5-15 minutes for implementation

🌐 Open issue in browser? (Y/n):
```

### Dry Run Preview

```text
🔍 DRY RUN - Would execute:
   gh issue create --title "Test Feature" --label "feature ai-task"

📋 Issue Details:
   Title: Test Feature
   Labels: feature,ai-task
   Assignee: none
   Milestone: none

   Body:
   -----
   Implement new test feature with proper error handling
```

## Best Practices

1. **Use descriptive titles** - Clear, specific issue titles
2. **Provide detailed descriptions** - Include requirements and context
3. **Choose appropriate labels** - Use existing label conventions
4. **Consider AI implications** - Only use `--ai-task` when you want automated implementation
5. **Test with dry run** - Preview complex issues before creation
6. **Use interactive mode** - For comprehensive issue creation

## Integration with Existing Workflows

This command integrates with:

- **AI task workflows** - When ai-task label is explicitly added
- **Project management** - Milestone and assignee support
- **Label management** - Respects existing repository labels
- **User story tracking** - Can create issues for user story implementation

## Error Handling

Common errors and solutions:

- **GitHub CLI not authenticated** - Run `gh auth login`
- **Issues disabled** - Enable Issues in repository settings
- **Invalid assignee** - Check GitHub username spelling
- **Network issues** - Check internet connection and GitHub status

This command provides safe, controlled issue creation with explicit opt-in for AI automation workflows.
