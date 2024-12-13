export default {
  useTabs: false,
  tabWidth: 4,
  endOfLine: 'lf',
  printWidth: 100,
  overrides: [
    {
      files: ['**/*.json', '**/*.yml', '**/*.config.js'],
      options: {
        tabWidth: 2
      }
    }
  ],

  semi: true,
  singleQuote: true,
  trailingComma: 'none',

  arrowParens: 'always',
  bracketSpacing: true,

  plugins: ['prettier-plugin-organize-imports']
};
