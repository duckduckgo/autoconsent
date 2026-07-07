import { defineConfig } from '@playwright/test';

const config = defineConfig({
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    testDir: '.',
    use: {
        trace: 'off',
    },
    projects: [
        {
            name: 'chrome-extension',
        },
    ],
});

export default config;
