const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');
const playwright = require('eslint-plugin-playwright');

module.exports = [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];