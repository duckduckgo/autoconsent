import { expect, type BrowserContext, type Page } from '@playwright/test';

export async function getExtensionId(context: BrowserContext): Promise<string> {
    const deadline = Date.now() + 30_000;
    while (Date.now() < deadline) {
        const [serviceWorker] = context.serviceWorkers();
        if (serviceWorker) {
            return serviceWorker.url().split('/')[2];
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const serviceWorker = await context.waitForEvent('serviceworker', { timeout: 30_000 });
    return serviceWorker.url().split('/')[2];
}

export async function openPopup(context: BrowserContext, extensionId?: string): Promise<Page> {
    const id = extensionId ?? (await getExtensionId(context));
    const popup = await context.newPage();
    await popup.goto(`chrome-extension://${id}/popup.html`);
    await popup.waitForLoadState('domcontentloaded');
    return popup;
}

type TestPageResults = {
    results?: { results?: string[] };
};

export async function expectBannerHidden(page: Page) {
    await expect
        .poll(
            async () => {
                const results = await page.evaluate(() => {
                    const windowResults = (window as unknown as TestPageResults).results;
                    return windowResults?.results ?? [];
                });
                if (results.includes('banner_hidden')) {
                    return true;
                }

                return page.evaluate(() => {
                    const banner = document.getElementById('privacy-test-page-cmp-test-banner');
                    return !!banner && window.getComputedStyle(banner).display === 'none';
                });
            },
            {
                message: 'cosmetic rule should hide the banner',
                timeout: 60_000,
            },
        )
        .toBe(true);
}

export async function expectBannerVisible(page: Page) {
    await page.waitForTimeout(600);

    await expect(page.locator('#privacy-test-page-cmp-test-banner')).toBeVisible();

    const results = await page.evaluate(() => {
        const windowResults = (window as unknown as TestPageResults).results;
        return windowResults?.results ?? [];
    });
    expect(results).not.toContain('banner_hidden');
}
