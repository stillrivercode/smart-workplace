# Gemini Project Context

You are working with an AI-powered development workflow template.

## AI Command Vocabulary

This project uses the Information Dense Keywords Dictionary (IDK) for standardized AI communication. See [@docs/AI.md](docs/AI.md) for comprehensive AI instructions and command vocabulary.

Key IDK commands available:
- **SELECT** - Find, retrieve, or explain information from codebase
- **CREATE** - Generate new code, files, or project assets  
- **FIX** - Debug and correct errors in code
- **analyze this** - Examine code/architecture for patterns and issues
- **debug this** - Investigate issues and provide root cause solutions
- **document this** - Create comprehensive documentation with examples
- **test this** - Generate comprehensive test suites
- **plan this** - Break down complex tasks into implementation plans
- **spec this** - Create detailed technical specifications

For complete command reference, see [@docs/information-dense-keywords.md](docs/information-dense-keywords.md).

## Key Concepts

- **AI Tasks**: Issues labeled 'ai-task' trigger automated implementation
- **OpenRouter**: All AI operations use OpenRouter API (not direct CLI)
- **Shared Commands**: You share common commands with Claude and other agents

## Common Commands

- `create-user-story-issue.sh --title "TITLE"` - Create GitHub issue and user story
- `create-spec-issue.sh --title "TITLE"` - Create GitHub issue and technical spec
- `create-epic.sh --title "TITLE"` - Create a new epic issue
- `analyze-issue.sh --issue NUMBER` - Analyze existing issue requirements

### Example Usage

```bash
# Create a new user story
create-user-story-issue.sh --title "Implement user login functionality"

# Create a new spec
create-spec-issue.sh --title "Technical specification for user login"

# Create a new epic
create-epic.sh --title "User authentication feature"

# Analyze existing issue
analyze-issue.sh --issue 123
```

- Standard git operations and file management

## Workflow Context

When working locally, you help developers with:

- Code generation and review
- Test creation
- Documentation
- Bug fixing

Remember: GitHub Actions use OpenRouter, not local CLI tools.
