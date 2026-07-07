import { test as base, chromium, type BrowserContext } from '@playwright/test';
import fs from 'fs';
import os from 'os';
import path from 'path';

const pathToExtension = path.join(__dirname, '../dist/addon-mv3');

export const test = base.extend<{
    context: BrowserContext;
    extensionId: string;
}>({
    context: async (_fixtures, use) => {
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
        let [serviceWorker] = context.serviceWorkers();
        if (!serviceWorker) {
            serviceWorker = await context.waitForEvent('serviceworker');
        }
        const extensionId = serviceWorker.url().split('/')[2];
        await use(extensionId);
    },
});

export { expect } from '@playwright/test';
