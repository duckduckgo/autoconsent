import { test, expect } from './fixtures';

const TEST_URL = 'https://privacy-test-pages.site/features/autoconsent/index.html';

test.describe('MV3 extension', () => {
    test('clicks reject on the privacy test page', async ({ context }) => {
        const page = await context.newPage();

        await page.goto(TEST_URL, { waitUntil: 'domcontentloaded' });

        await expect(page.locator('#privacy-test-page-cmp-test')).toBeVisible();

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
    });
});
