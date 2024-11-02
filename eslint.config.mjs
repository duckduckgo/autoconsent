import tseslint from 'typescript-eslint';
import json from 'eslint-plugin-json';
import ddgConfig from '@duckduckgo/eslint-config';
import globals from 'globals';

// @ts-check
export default tseslint.config(
    ...ddgConfig,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.json"],
        ...json.configs["recommended"]
    },

    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: 2021,
            sourceType: "module",
        },

        rules: {
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/no-unused-expressions": 0,

            indent: ["error", 2, {
                SwitchCase: 1,
            }],
        },
    }
);
