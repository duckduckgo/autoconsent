import { test as baseTest } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

/** Cloudflare challenges headless automation unless webdriver is masked (e.g. weathertech.com). */
const test = baseTest.extend({
    context: async ({ context }, use) => {
        await context.addInitScript(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        });
        await use(context);
    },
});

generateCMPTests('osano-cmp', ['https://www.weathertech.com/', 'https://www.bobsredmill.com/', 'https://www.bigagnes.com/'], {
    playwrightTest: test,
});
