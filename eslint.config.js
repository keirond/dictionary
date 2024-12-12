import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const ignores = ['*.js', '*.mjs', 'dist/', 'node_modules/'];
const jsRules = {};

export default tseslint.config({
  ignores: ignores,
  extends: [...eslint.configs.recommended, ...tseslint.configs.recommended],
  rules: {
    ...jsRules,
  },
});
