# Cost Monitoring

Monitor and analyze AI API costs.

## Cost Analysis

```bash
# View cost analysis documentation
cat docs/cost-analysis.md

# Check estimated costs for different usage patterns
grep -A10 "Estimated Costs" README.md
```

## Cost Tracking Templates

```bash
# Copy cost monitoring template
cp docs/templates/ai-cost-monitoring-template.csv my-costs.csv

# View Google Sheets template guide
cat docs/templates/cost-monitoring-guide.md
```

## Usage Patterns

```bash
# Light usage (10-20 tasks/month): $20-50
# Moderate usage (50-100 tasks/month): $75-200
# Heavy usage (100+ tasks/month): $150-500

# Cost factors:
# - Issue complexity
# - Code generation amount
# - Number of iterations
# - Model selection (Claude Sonnet)
```

## Cost Reduction Tips

```bash
# 1. Use specific, clear issue descriptions
# 2. Break large features into smaller tasks
# 3. Set spending limits in workflow config
# 4. Use ai-task-small label for simple tasks
# 5. Monitor logs: gh run list --workflow=ai-task.yml
```
