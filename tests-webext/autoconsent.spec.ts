import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';

const TESTCMP_URL = 'https://privacy-test-pages.site/features/autoconsent/index.html';
const HEURISTIC_URL = 'https://privacy-test-pages.site/features/autoconsent/heuristic.html';

async function expectRejectClicked(page: Page) {
    await expect
        .poll(
            async () =>
                page.evaluate(() => {
                    const results = (window as unknown as { results?: { results?: string[] } }).results;
                    return results?.results?.[0] === 'button_clicked';
                }),
            {
                message: 'extension should click the reject button',
                timeout: 60_000,
            },
        )
        .toBe(true);
}

test.describe('MV3 extension', () => {
    test('clicks reject on the privacy test page', async ({ context }) => {
        const page = await context.newPage();

        await page.goto(TESTCMP_URL, { waitUntil: 'domcontentloaded' });

        await expect(page.locator('#privacy-test-page-cmp-test')).toBeVisible();

        await expectRejectClicked(page);
    });

    test('clicks reject on the heuristic test page', async ({ context }) => {
        const page = await context.newPage();

        await page.goto(HEURISTIC_URL, { waitUntil: 'domcontentloaded' });

        await expect(page.locator('#privacy-test-page-cmp-test-heuristic')).toBeVisible();

        await expectRejectClicked(page);
    });
});
