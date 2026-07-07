import { test as base, chromium, type BrowserContext } from '@playwright/test';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { getExtensionId } from './helpers';

const pathToExtension = path.join(__dirname, '../dist/addon-mv3');

export const test = base.extend<{
    context: BrowserContext;
    extensionId: string;
}>({
    // Playwright requires an object destructuring pattern for fixture dependencies.
    // eslint-disable-next-line no-empty-pattern
    context: async ({}, use) => {
        if (!fs.existsSync(path.join(pathToExtension, 'manifest.json'))) {
            throw new Error('Bundled MV3 extension not found. Run `npm run prepublish` before webext tests.');
        }

        const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pw-webext-'));
        const context = await chromium.launchPersistentContext(userDataDir, {
            channel: 'chromium',
            headless: !!process.env.CI,
            args: [
                ...(process.env.CI ? ['--headless=new'] : []),
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`,
            ],
        });

        await use(context);
        await context.close();
    },
    extensionId: async ({ context }, use) => {
        const extensionId = await getExtensionId(context);
        await use(extensionId);
    },
});

export { expect } from '@playwright/test';
