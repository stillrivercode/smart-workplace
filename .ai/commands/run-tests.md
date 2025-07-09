# Run Tests

Run the test suite for the agentic workflow template.

## All Tests

```bash
# Activate virtual environment first
source venv/bin/activate

# Run all tests
pytest

# Run with coverage
pytest --cov=scripts --cov=tests

# Run specific test file
pytest tests/test_workflow_syntax.py

# Run specific test
pytest tests/test_workflow_syntax.py::TestWorkflowSyntax::test_ai_task_workflow_structure
```

## Test Categories

```bash
# Unit tests only
pytest -m "not integration"

# Integration tests
pytest -m integration

# Fast tests (exclude slow)
pytest -m "not slow"
```

## Workflow Tests

```bash
# Test workflow syntax
pytest tests/test_workflow_syntax.py -v

# Test workflow integration
pytest tests/test_workflow_integration.py -v

# Test security
pytest tests/test_pat_security.py -v
```
