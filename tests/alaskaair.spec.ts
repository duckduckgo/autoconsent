import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

test.describe.configure({ timeout: 120000 });

// Alaska Air loads CookieConsent v3 with hideFromBots; the banner stays hidden when navigator.webdriver is true.
test.use({
    launchOptions: {
        args: ['--disable-blink-features=AutomationControlled'],
    },
    userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
});

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
});

generateCMPTests('alaskaair', ['https://www.alaskaair.com/']);
