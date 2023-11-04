const { defineConfig } = require("eslint-define-config");

/* eslint-disable perfectionist/sort-objects */
module.exports = defineConfig({
  root: true,
  extends: ["@monorepo-app-tony"],
});
