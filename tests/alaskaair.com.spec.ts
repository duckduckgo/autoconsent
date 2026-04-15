import generateCMPTests from '../playwright/runner';

generateCMPTests('alaskaair.com', ['https://www.alaskaair.com/'], {
    beforeGoto: async (page) => {
        await page.addInitScript(() => {
            try {
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => false,
                    configurable: true,
                });
            } catch (_e) {
                /* ignore */
            }
        });
    },
});
