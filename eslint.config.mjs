import tseslint from 'typescript-eslint';
import ddgConfig from '@duckduckgo/eslint-config';
import globals from 'globals';

// @ts-check
const c = tseslint.config(
    ...tseslint.configs.recommended,
    ...ddgConfig,

    {
        ignores: ['dist/**/*', '.agents/**/*'],
    },

    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: 2021,
            sourceType: 'module',
        },

        rules: {
            '@typescript-eslint/no-explicit-any': 0,
            'no-unused-expressions': 0,
            '@typescript-eslint/no-unused-expressions': 0,
            '@typescript-eslint/no-require-imports': 0,
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'none',
                    caughtErrors: 'none',
                    ignoreRestSiblings: true,
                    vars: 'all',
                },
            ],
            'no-undef': 'off',
        },
    },

    {
        files: ['addon/**/*'],
        languageOptions: {
            globals: {
                ...globals.webextensions,
            },
        },
    },

    {
        // the library runs on engines without RegExp lookbehind (Safari before 16.4), where it fails to load
        files: ['lib/**/*.ts'],
        rules: {
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'Literal[regex.pattern=/\\(\\?<[=!]/]',
                    message: 'RegExp lookbehind is not supported by all target browsers.',
                },
                {
                    selector: 'Literal[value=/\\(\\?<[=!]/], TemplateElement[value.raw=/\\(\\?<[=!]/]',
                    message: 'RegExp lookbehind is not supported by all target browsers.',
                },
            ],
        },
    },

    {
        files: ['tests/**/*', 'tests-wtr/**/*'],
        languageOptions: {
            globals: {
                ...globals.jasmine,
                ...globals.chai,
                before: 'readonly',
            },
        },
    },
);

export default c;
