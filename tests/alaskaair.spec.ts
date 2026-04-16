import fs from 'fs';
import path from 'path';
import generateCMPTests from '../playwright/runner';

const fixturePath = path.join(__dirname, 'fixtures', 'alaskaair-cookieconsent.html');

// Fixture mirrors Alaska's CookieConsent v3 at the real URL (Tealium geo-gates the live banner in CI).
generateCMPTests('alaskaair', ['https://www.alaskaair.com/'], {
    preNavigate: async (page) => {
        const body = fs.readFileSync(fixturePath, 'utf8');
        await page.route('https://www.alaskaair.com/**', async (route) => {
            await route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body });
        });
    },
});
