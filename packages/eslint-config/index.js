const { defineConfig } = require("eslint-define-config");

const prettierConfig = {
  arrowParens: "always",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
};

/* eslint-disable perfectionist/sort-objects */
module.exports = defineConfig({
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "prettier",
    "plugin:perfectionist/recommended-natural",
  ],
  plugins: ["json-format", "prettier", "perfectionist"],
  rules: {
    "prettier/prettier": ["error", prettierConfig, { usePrettierrc: false }],
  },
  settings: {
    "json/json-with-comments-files": [],
  },
  ignorePatterns: [
    // Yarn Packages
    ".yarn/**/*",
    ".pnp.cjs",
    ".pnp.loader.mjs",

    // Build Artifacts
    "**/dist/**/*",
    "**/__generated__/**/*",
  ],
});
