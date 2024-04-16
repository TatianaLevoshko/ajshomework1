import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

export default [
  {
    files: ['src/**/*.js'],
    ignores: ['**/*.config.js'],
    rules: {
      indent: ['error', 4], // отступы
      semi: ['error', 'never'] // кавычки
    },
    languageOptions: {
      globals: globals.browser
    }
  },
  ...compat.extends('standard')
]