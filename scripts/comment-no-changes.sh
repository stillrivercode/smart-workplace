#!/bin/bash

# Script to comment on issue when no changes were made
# Usage: ./comment-no-changes.sh
# Environment variables expected:
# - GITHUB_TOKEN
# - ISSUE_NUMBER

set -e

# Read from environment variable instead of command-line argument
ISSUE_NUMBER="${ISSUE_NUMBER:?Error: ISSUE_NUMBER environment variable is required}"

echo "Adding comment to issue #$ISSUE_NUMBER about no changes..."

gh issue comment "$ISSUE_NUMBER" --body "$(cat <<'EOF'
## 🤖 AI Task Completed - No Changes Required

The AI workflow has analyzed this issue but determined that no code changes are necessary at this time.

**Possible reasons:**
- The requested feature/fix may already be implemented
- The issue description may need clarification
- The task may require manual intervention or additional context
- The current codebase state already addresses the concern

**Next steps:**
- Please review if the issue is still relevant
- Consider adding more specific requirements or context
- If changes are still needed, please provide additional details

**Issue Status:** The issue will remain open for further discussion.

---
*Generated by AI Task Orchestration Workflow*
EOF
)"

echo "Comment added to issue #$ISSUE_NUMBER"
