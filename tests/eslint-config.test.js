/**
 * ESLint Configuration Validation Tests
 * 
 * These tests ensure the ESLint configuration loads properly and
 * contains expected security and linting rules.
 */

const fs = require('fs');
const path = require('path');

describe('ESLint Configuration', () => {
  let eslintConfig;

  beforeAll(() => {
    // Load the ESLint configuration
    const configPath = path.join(__dirname, '..', 'eslint.config.js');
    
    // Verify config file exists
    expect(fs.existsSync(configPath)).toBe(true);
    
    // Load configuration without throwing
    eslintConfig = require(configPath);
  });

  test('should load without syntax errors', () => {
    expect(eslintConfig).toBeDefined();
    expect(Array.isArray(eslintConfig)).toBe(true);
  });

  test('should contain security plugin configuration', () => {
    const securityConfig = eslintConfig.find(config => 
      config.plugins && config.plugins.security
    );
    
    expect(securityConfig).toBeDefined();
    expect(securityConfig.plugins.security).toBeDefined();
  });

  test('should include base JavaScript rules', () => {
    const baseConfig = eslintConfig.find(config => 
      config.files && config.files.includes('**/*.js')
    );
    
    expect(baseConfig).toBeDefined();
    expect(baseConfig.languageOptions).toBeDefined();
    expect(baseConfig.languageOptions.ecmaVersion).toBeDefined();
  });

  test('should have proper file patterns', () => {
    const jsConfig = eslintConfig.find(config => 
      config.files && config.files.includes('**/*.js')
    );
    
    expect(jsConfig.files).toContain('**/*.js');
    expect(jsConfig.files).toContain('**/*.mjs');
    expect(jsConfig.files).toContain('**/*.cjs');
  });

  test('should include test file configuration', () => {
    const testConfig = eslintConfig.find(config =>
      config.files && config.files.some(pattern => 
        pattern.includes('test') || pattern.includes('spec')
      )
    );
    
    expect(testConfig).toBeDefined();
  });

  test('should have shared-commands specific configuration', () => {
    const sharedCommandsConfig = eslintConfig.find(config =>
      config.files && config.files.includes('shared-commands/**/*.js')
    );
    
    expect(sharedCommandsConfig).toBeDefined();
  });

  test('should include global ignores', () => {
    const ignoreConfig = eslintConfig.find(config => config.ignores);
    
    expect(ignoreConfig).toBeDefined();
    expect(ignoreConfig.ignores).toContain('node_modules/');
    expect(ignoreConfig.ignores).toContain('dist/');
  });
});