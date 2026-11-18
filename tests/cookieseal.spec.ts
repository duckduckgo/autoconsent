import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieseal', [
    'https://www.lcw.com/',
    'https://www.bkm.com.tr/',
    // reject button hidden, opt-out goes through the settings popup
    'https://www.karnaval.com/',
    // CookieSeal script loaded twice, two stacked banners
    'https://www.hotic.com.tr/',
]);
