# AI Commands for Agentic Workflow Template

This directory contains helpful commands for working with the agentic workflow template. These commands provide
quick access to common tasks and workflows and can be used by any AI assistant.

## Available Commands

### Setup & Configuration

- **[setup-project.md](setup-project.md)** - Initial project setup and configuration
- **[label-management.md](label-management.md)** - GitHub label setup and management
- **[update-template.md](update-template.md)** - Sync with latest template updates

### Development

- **[create-issue.md](create-issue.md)** - Create GitHub issues with optional AI automation
- **[create-ai-task.md](create-ai-task.md)** - Execute AI tasks locally or via GitHub
- **[development-workflow.md](development-workflow.md)** - Standard development commands
- **[run-tests.md](run-tests.md)** - Testing commands and strategies

### Operations

- **[workflow-management.md](workflow-management.md)** - GitHub Actions workflow management
- **[security-checks.md](security-checks.md)** - Security scanning and validation
- **[cost-monitoring.md](cost-monitoring.md)** - Monitor and control AI API costs

### Documentation & Analysis

- **[roadmap.sh](../../shared-commands/commands/roadmap.sh)** - View and generate project roadmaps.
- **[create-spec-issue.sh](../../shared-commands/commands/create-spec-issue.sh)** - Create detailed technical
  specifications.
- **[analyze-issue.sh](../../shared-commands/commands/analyze-issue.sh)** - Analyze GitHub issues for
  requirements and complexity.

### Support

- **[troubleshooting.md](troubleshooting.md)** - Common issues and solutions

## Quick Start

1. **Initial Setup**

   ```bash
   # See setup-project.md
   ./install.sh && source venv/bin/activate
   ```

2. **Create Issues & AI Tasks**

   ```bash
   # Create issue (see create-issue.md)
   npx @stillrivercode/shared-commands create-issue -t "Fix login bug" -b "Description here"

   # Create issue with AI automation (explicit opt-in)
   npx @stillrivercode/shared-commands create-issue -t "Add feature" --ai-task -b "Details here"

   # Execute AI task for existing issue (see create-ai-task.md)
   ./scripts/execute-ai-task.sh ISSUE_NUMBER
   ```

3. **Generate Documentation** (using unified shared commands)

   ```bash
   # Create technical specification
   npx @stillrivercode/shared-commands create-spec-issue --title "Authentication Architecture"

   # Analyze existing issue for requirements and complexity
   npx @stillrivercode/shared-commands analyze-issue --issue 25
   ```

4. **Run Tests**

   ```bash
   # See run-tests.md
   pytest
   ```

## Shared Commands

The core commands for this workflow are located in the `shared-commands/`
directory and distributed as an NPM package for consistency across different AI assistants (Claude, Gemini, etc.).

### Using Shared Commands

```bash
# Use commands directly via npx
npx @stillrivercode/shared-commands roadmap
npx @stillrivercode/shared-commands create-spec-issue --title "Technical Design"
npx @stillrivercode/shared-commands analyze-issue --issue 25
```

## Command Usage

Each command file contains:

- Purpose and description
- Actual commands to run
- Examples and use cases
- Related documentation

## Contributing

When adding new commands:

1. Create a descriptive `.md` file
2. Include clear examples
3. Link to relevant documentation
4. Update this README
