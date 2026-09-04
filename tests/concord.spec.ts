import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

// Concord's site client refuses to run when navigator.webdriver is set, so the banner never
// renders under automation. Chromium can mask the flag; WebKit and Firefox cannot.
test.use({ launchOptions: { args: ['--disable-blink-features=AutomationControlled'] } });
test.skip(({ browserName }) => browserName !== 'chromium', 'Concord self-disables when navigator.webdriver is set');

generateCMPTests('concord', ['https://www.sheerid.com/', 'https://www.concord.tech/', 'https://taxonline.co.uk/'], {
    testOptIn: false,
});
