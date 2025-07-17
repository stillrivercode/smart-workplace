# Migration Plan: shared-commands to @stillrivercode/information-dense-keywords

## Overview

This document outlines the migration plan from the local `shared-commands` directory to the published npm package `@stillrivercode/information-dense-keywords` (IDK).

## Current State Analysis

### Existing shared-commands Structure
- **Location**: `/shared-commands/`
- **Commands**:
  - `analyze-issue.sh` - Analyzes GitHub issues for requirements and complexity
  - `create-spec-issue.sh` - Creates technical specification issues
  - `roadmap.sh` - Manages project roadmaps
- **Libraries**:
  - `common-utils.sh` - Shared utility functions
  - `github-utils.sh` - GitHub API utilities
  - `github-integration.sh` - GitHub integration functions
  - `markdown-utils.sh` - Markdown processing utilities
- **Templates**:
  - `spec-template.md` - Technical specification template

### IDK Package Features
- Standardized command vocabulary for AI assistants
- Modular dictionary architecture
- Reference system for consistent AI communication
- Command definition standards
- Documentation of expected output formats

## Migration Strategy

### Phase 1: Assessment and Planning
1. **Compatibility Analysis**
   - Map existing commands to IDK command vocabulary
   - Identify feature gaps between shared-commands and IDK
   - Determine if custom extensions are needed

2. **Dependency Review**
   - List all projects using shared-commands
   - Identify integration points in workflows
   - Document CLAUDE.md references

### Phase 2: Implementation

#### Step 1: Install IDK Package
```bash
# Install IDK package locally using npx
npx @stillrivercode/information-dense-keywords
```

#### Step 2: Leverage Local Dictionary
After installation, reference the local IDK dictionary files:

| Current Command | IDK Vocabulary | Implementation |
|----------------|----------------|----------------|
| `analyze-issue.sh` | `ANALYZE issue --number X` | Keep script, reference local IDK dictionary |
| `create-spec-issue.sh` | `CREATE spec --title "X"` | Keep script, use local vocabulary standards |
| `roadmap.sh` | `SELECT roadmap` or `CREATE roadmap` | Keep script, leverage local IDK definitions |

#### Step 3: Use IDK Language Standards
1. **AI Communication**
   - Use IDK vocabulary in all AI interactions
   - Replace ad-hoc commands with standardized IDK language
   - Example: `SELECT the authentication logic from auth.py`
   - Example: `FIX the validation error in user registration`

2. **AI Context File Updates**
   - Update `CLAUDE.md` to reference IDK command vocabulary
   - Update `GEMINI.md` with IDK language standards
   - Include examples of IDK command chaining in both files
   - Standardize how we communicate with AI assistants across all models

3. **Scripts Integration**
   - Keep existing shell scripts for execution
   - Use IDK language when scripts interact with AI
   - Example: Script calls AI with `ANALYZE this database schema for performance issues`

### Phase 3: Migration Execution

1. **Parallel Running Period** (Week 1-2)
   - Keep both systems active
   - Monitor for issues
   - Collect feedback

2. **Gradual Cutover** (Week 3-4)
   - Migrate one workflow at a time
   - Test thoroughly after each migration
   - Update both `CLAUDE.md` and `GEMINI.md` documentation

3. **Deprecation** (Week 5-6)
   - Add deprecation notices to shared-commands
   - Final testing of all workflows
   - Complete documentation updates for all AI context files

4. **Removal** (Week 7)
   - Archive shared-commands directory
   - Remove from package.json
   - Final cleanup and verification across all AI models

## Technical Considerations

### Benefits of Migration
1. **Standardization**: Industry-standard command vocabulary
2. **Maintenance**: Outsourced package maintenance
3. **Updates**: Automatic access to new commands and features
4. **Community**: Benefit from community contributions
5. **Consistency**: Same commands across all projects

### Potential Challenges
1. **Custom Functionality**: Some shared-commands features may not have direct IDK equivalents
2. **Template Integration**: Need to adapt template system to IDK
3. **GitHub Integration**: Verify IDK's GitHub integration meets all needs
4. **Learning Curve**: Team needs to learn IDK command syntax

### Risk Mitigation
1. **Extended Testing**: Comprehensive testing before full migration
2. **Rollback Plan**: Keep shared-commands archived for emergency rollback
3. **Documentation**: Extensive documentation of differences and migration steps
4. **Gradual Migration**: Migrate one workflow at a time to minimize risk

## Implementation Timeline

| Week | Phase | Activities |
|------|-------|------------|
| 1 | Assessment | Full compatibility analysis, identify direct command replacements |
| 2 | Preparation | Install IDK, update test workflows with direct replacements |
| 3-4 | Direct Migration | Replace commands directly in workflows, monitor |
| 5-6 | Finalization | Complete migration, update all documentation |
| 7 | Cleanup | Remove shared-commands, final verification |

## Success Criteria

1. All existing functionality maintained or improved
2. No disruption to active workflows
3. Successful execution of all migrated commands
4. Updated documentation reflects new system
5. Team trained on IDK usage

## Rollback Plan

If critical issues arise:
1. Restore shared-commands from archive
2. Revert workflow changes via git
3. Restore original CLAUDE.md content
4. Document lessons learned for future attempt

## Next Steps

1. Review and approve this migration plan
2. Create detailed compatibility matrix
3. Set up test environment for migration
4. Schedule migration kickoff meeting
5. Begin Phase 1 assessment

## References

- [IDK npm package](https://www.npmjs.com/package/@stillrivercode/information-dense-keywords)
- [IDK GitHub Repository](https://github.com/stillrivercode/information-dense-keywords)
- Current shared-commands documentation in project