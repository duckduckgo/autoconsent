import pluginJs from "@eslint/js";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginJson from "eslint-plugin-json";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,ts,json}"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginJson.configs.recommended,
  pluginPrettierRecommended,
];
