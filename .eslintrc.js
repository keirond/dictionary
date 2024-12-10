module.exports = {
    "root": true,
};
//
// {
//   "root": true,
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaVersion": 2021,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "plugins": [
//     "@typescript-eslint",
//     "import",
//     "prettier"
//   ],
//   "extends": [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:import/recommended",
//     "plugin:import/typescript",
//     "plugin:prettier/recommended",
//     "next/core-web-vitals"
//   ],
//   "rules": {
//     "no-unused-vars": "off",
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       {
//         "argsIgnorePattern": "^_"
//       }
//     ],
//     "prettier/prettier": "warn",
//     "import/order": [
//       "warn",
//       {
//         "groups": [
//           [
//             "builtin",
//             "external"
//           ],
//           "internal",
//           [
//             "parent",
//             "sibling",
//             "index"
//           ]
//         ],
//         "newlines-between": "always",
//         "alphabetize": {
//           "order": "asc",
//           "caseInsensitive": true
//         }
//       }
//     ],
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/no-explicit-any": "warn",
//     "spaced-comment": [
//       "error",
//       "always",
//       {
//         "markers": [
//           "/"
//         ]
//       }
//     ],
//     "multiline-comment-style": [
//       "error",
//       "starred-block"
//     ],
//     "no-inline-comments": "error",
//     "capitalized-comments": [
//       "error",
//       "always",
//       {
//         "ignorePattern": "TODO|FIXME"
//       }
//     ]
//   },
//   "overrides": [
//     {
//       "files": [
//         "**/*.ts",
//         "**/*.tsx"
//       ],
//       "rules": {
//         "@typescript-eslint/no-var-requires": "off"
//       }
//     }
//   ],
//   "settings": {
//     "react": {
//       "version": "detect"
//     },
//     "import/resolver": {
//       "typescript": {
//         "project": "./tsconfig.json"
//       }
//     }
//   }
// }
