/**
 * IDK Integration Tests
 * 
 * These tests verify that the Information Dense Keywords Dictionary
 * is properly installed and accessible in the project.
 */

const fs = require('fs');
const path = require('path');

describe('IDK Integration', () => {
  const idkPath = path.join(__dirname, '..', 'docs', 'information-dense-keywords.md');
  const aiPath = path.join(__dirname, '..', 'docs', 'AI.md');
  const claudePath = path.join(__dirname, '..', 'CLAUDE.md');
  const geminiPath = path.join(__dirname, '..', 'GEMINI.md');

  test('should have IDK dictionary file installed', () => {
    expect(fs.existsSync(idkPath)).toBe(true);
  });

  test('should have AI.md context file', () => {
    expect(fs.existsSync(aiPath)).toBe(true);
  });

  test('should have CLAUDE.md reference IDK vocabulary', () => {
    expect(fs.existsSync(claudePath)).toBe(true);
    const claudeContent = fs.readFileSync(claudePath, 'utf8');
    expect(claudeContent).toMatch(/AI Command Vocabulary/);
    expect(claudeContent).toMatch(/Information Dense Keywords Dictionary/);
    expect(claudeContent).toMatch(/docs\/AI\.md/);
  });

  test('should have GEMINI.md reference IDK vocabulary', () => {
    expect(fs.existsSync(geminiPath)).toBe(true);
    const geminiContent = fs.readFileSync(geminiPath, 'utf8');
    expect(geminiContent).toMatch(/AI Command Vocabulary/);
    expect(geminiContent).toMatch(/Information Dense Keywords Dictionary/);
    expect(geminiContent).toMatch(/docs\/AI\.md/);
  });

  test('should have core IDK commands documented', () => {
    const idkContent = fs.readFileSync(idkPath, 'utf8');
    expect(idkContent).toMatch(/SELECT/);
    expect(idkContent).toMatch(/CREATE/);
    expect(idkContent).toMatch(/FIX/);
    expect(idkContent).toMatch(/analyze this/);
    expect(idkContent).toMatch(/debug this/);
  });

  test('should have dictionary structure installed', () => {
    const dictionaryPath = path.join(__dirname, '..', 'docs', 'dictionary');
    expect(fs.existsSync(dictionaryPath)).toBe(true);
    
    // Check for core dictionary files
    expect(fs.existsSync(path.join(dictionaryPath, 'core', 'select.md'))).toBe(true);
    expect(fs.existsSync(path.join(dictionaryPath, 'core', 'create.md'))).toBe(true);
    expect(fs.existsSync(path.join(dictionaryPath, 'core', 'fix.md'))).toBe(true);
  });

  test('should not have shared-commands directory', () => {
    const sharedCommandsPath = path.join(__dirname, '..', 'shared-commands');
    expect(fs.existsSync(sharedCommandsPath)).toBe(false);
  });
});