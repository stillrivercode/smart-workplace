const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const security = require('eslint-plugin-security');

module.exports = [
  // Base configuration for all files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Node.js globals
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Console
        console: 'readonly',
        // Browser globals (for CLI tools that might run in browser-like environments)
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
    },
  },

  // CommonJS files
  {
    files: ['**/*.cjs', '.eslintrc*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
  },

  // Security rules for all files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    plugins: {
      security,
    },
    rules: {
      ...security.configs.recommended.rules,
    },
  },

  // Test files - Jest environment and relaxed security rules
  {
    files: [
      '**/*.test.js',
      '**/*.spec.js',
      '**/tests/**/*.js',
      '**/test/**/*.js',
      '**/__tests__/**/*.js',
    ],
    languageOptions: {
      globals: {
        // Jest globals
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
        // Node.js globals for tests
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'security/detect-child-process': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-non-literal-require': 'off',
      'security/detect-unsafe-regex': 'off',
    },
  },

  // CLI files - Node.js specific globals
  {
    files: ['cli/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },

  // Scripts files
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },

  // Shared commands files
  {
    files: ['shared-commands/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Prettier integration (should be last)
  prettier,

  // Global ignores
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '.git/',
      '*.min.js',
      'package-lock.json',
      'scripts/', // Contains shell scripts, not JavaScript
      '.temp/',
      'temp/',
      '**/fixtures/',
      'jest.config.js',
    ],
  },
];
