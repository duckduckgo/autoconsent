import generateCMPTests from '../playwright/runner';

generateCMPTests('plentyone-cookiebar', [
    'https://www.outlet46.de/',
    'https://www.trend-e-shop.de/',
    'https://www.all-4-baby.de/',
    // "Speichern" variant: no reject-all button, saving keeps the default opted-out toggles
    'https://www.josefseibel.com/',
]);
