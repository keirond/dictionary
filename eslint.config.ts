import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';

import prettierPlugin from 'eslint-plugin-prettier';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from './prettier.config.js';

import pluginNext from 'types/plugin-next.js';


export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    extends: [
        pluginNext
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin
    },
    extends: [prettierPluginRecommended],
    rules: {
      'prettier/prettier': ['warn', prettierConfig]
    }
  },
  {
    ignores: ['dist/', 'node_modules/']
  }
);
