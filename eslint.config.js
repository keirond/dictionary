import tses
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const ignores = ['*.js', '*.mjs', 'dist/', 'node_modules/']
const jsRules = {};

export default

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      //   globals: {},
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    //   linterOptions: {
    //     noInlineConfig: true,
    //     reportUnusedDisableDirectives: "warn"
    //   },
    //   processor:
    // plugins: ['@typescript-eslint', 'import', 'prettier'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...jsRules,
      ...prettierPlugin.configs.recommended.rules,
      ...prettierConfig.rules,

      //   'prettier/prettier': [
      //     'error',
      //     {
      //       trailingComma: 'es5',
      //       useTabs: false,
      //       tabWidth: 4,
      //       endOfLine: 'lf',
      //       printWidth: 100,
      //       overrides: [
      //         {
      //           files: ['*.json', '*.yml', '*.yaml', '*rc.js', '*.config.js'],
      //           options: {
      //             tabWidth: 2,
      //           },
      //         },
      //       ],
      //       singleQuote: true,
      //     },
      //   ],
    },
    //   settings:
  },
];
