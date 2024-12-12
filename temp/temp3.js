import eslint from '@eslint/js'

import prettierConfig from './prettier.config.js'
import { fileURLToPath } from 'url'

import { fileURLToPath } from 'url'
import path from 'path'
import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from './prettier.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  eslint.configs.recommended,
  {
    files: ['*/.ts', '*/.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
      // Add....
    }
  },
  // React Configuration
  {
    files: ['*/.jsx', '*/.tsx'],
    languageOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      // Add or override React-specific rules here

      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  //  Prettier Integration
  {
    files: ['*/.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': ['warn', prettierConfig]
    }
  },
  {
    ignores: ['*/.js', '*/.mjs', 'dist/', 'node_modules/']
  }
]