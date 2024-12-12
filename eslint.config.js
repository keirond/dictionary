import eslint from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.js';

const ignores = ['*.js', '*.mjs', 'dist/', 'node_modules/'];
const jsRules = {};

export default tseslint.config({
  ignores,
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react: eslintPluginReact,
    prettier: eslintPluginPrettier,
    import: eslintPluginImport,
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    eslintPluginImport.configs.recommended,
  ],
  rules: {
    ...jsRules,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'prettier/prettier': ['warn', prettierConfig],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
