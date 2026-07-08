const { FlatCompat } = require("@eslint/eslintrc");
const { defineConfig } = require("eslint/config");

const docusaurus = require("@docusaurus/eslint-plugin");
const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends(
      "plugin:@docusaurus/recommended",
      "plugin:@typescript-eslint/recommended"
    ),
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {},
    },
    plugins: {
      "@docusaurus": docusaurus,
      "@typescript-eslint": typescriptEslint,
      prettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-require-imports": "warn",
    },
  },
]);
