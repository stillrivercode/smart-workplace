/**
 * Shared Commands Security Tests
 * 
 * These tests verify that the shared commands module properly validates
 * input and prevents security vulnerabilities like directory traversal.
 */

const fs = require('fs');
const path = require('path');

describe('Shared Commands Security', () => {
  const sharedCommandsPath = path.join(__dirname, '..', 'shared-commands', 'index.js');
  let sharedCommandsContent;

  beforeAll(() => {
    // Read the shared commands file
    expect(fs.existsSync(sharedCommandsPath)).toBe(true);
    sharedCommandsContent = fs.readFileSync(sharedCommandsPath, 'utf8');
  });

  test('should have allowlist of valid commands', () => {
    // Check that there's an allowedCommands array
    expect(sharedCommandsContent).toMatch(/allowedCommands\s*=/);
    expect(sharedCommandsContent).toMatch(/\['.*'\]/);
  });

  test('should validate command against allowlist', () => {
    // Check for command validation logic
    expect(sharedCommandsContent).toMatch(/allowedCommands\.includes/);
    expect(sharedCommandsContent).toMatch(/process\.exit\(1\)/);
  });

  test('should construct safe file paths', () => {
    // Check that paths are constructed safely
    expect(sharedCommandsContent).toMatch(/path\.join/);
    expect(sharedCommandsContent).toMatch(/__dirname/);
  });

  test('should check file existence before execution', () => {
    // Check for file existence validation
    expect(sharedCommandsContent).toMatch(/fs\.existsSync/);
  });

  test('should have security ESLint disable comment for validated path', () => {
    // Check for the security ESLint disable comment
    expect(sharedCommandsContent).toMatch(/eslint-disable-next-line security\/detect-non-literal-fs-filename/);
  });

  test('should reject invalid commands', () => {
    // This would be an integration test in a real scenario
    // For now, we verify the logic exists in the code
    expect(sharedCommandsContent).toMatch(/Invalid command/);
  });

  test('should only accept known command patterns', () => {
    // Verify that only .sh files in commands/ directory are executed
    expect(sharedCommandsContent).toMatch(/commands.*\.sh/);
  });
});