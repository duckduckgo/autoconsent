import fs from 'fs';
import path from 'path';
import generateCMPTests from '../playwright/runner';

const fixturePath = path.join(__dirname, 'fixtures', 'alaskaair-cookieconsent.html');

// Serve a static CookieConsent v3 page at the real hostname so site urlPattern rules apply.
// Live Alaska geo-gates the banner via Tealium, which is unreliable in CI.
generateCMPTests('alaskaair-com', ['https://www.alaskaair.com/'], {
    preNavigate: async (page) => {
        const body = fs.readFileSync(fixturePath, 'utf8');
        await page.route('https://www.alaskaair.com/**', async (route) => {
            await route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body });
        });
    },
});
