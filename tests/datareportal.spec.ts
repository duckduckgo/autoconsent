import { expect, test } from '@playwright/test';

const url = 'https://datareportal.com/';

test.describe('datareportal', () => {
    test('handles the Squarespace and regional Quantcast banners', async ({ page }) => {
        const { injectAutoconsent } = await import('../.agents/skills/proxy-testing/scripts/regional-proxy.mjs');
        const autoconsent = await injectAutoconsent(page, { action: 'optOut', completionTimeout: 90000, detectionTimeout: 25000 });

        await page.goto(url, { waitUntil: 'commit' });

        const completed = await autoconsent.waitForCompletion(90000, 25000);
        if (completed && !autoconsent.hasMessage('selfTestResult')) {
            await autoconsent.waitForMessage('selfTestResult', 10000);
        }
        const received = autoconsent.received;

        await expect
            .poll(() => received.some((msg) => msg.type === 'optOutResult' && msg.cmp === 'datareportal' && msg.result === true), {
                timeout: 90000,
            })
            .toBe(true);
        await expect
            .poll(() => received.some((msg) => msg.type === 'selfTestResult' && msg.cmp === 'datareportal' && msg.result === true), {
                timeout: 10000,
            })
            .toBe(true);
        await expect(page.locator('.cookie-banner-mount-point section[aria-label="Cookie banner"]')).toBeHidden();
        await expect(page.locator('#qc-cmp2-ui')).toBeHidden();
    });
});
