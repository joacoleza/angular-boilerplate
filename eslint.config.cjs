const js = require('@eslint/js');
const ts = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = {
  languageOptions: {
    parser: ts,
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
  },
  ignores: ['node_modules/**', 'dist/**', '.angular/**', 'eslint.config.cjs'],
};
