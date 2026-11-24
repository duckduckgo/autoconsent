import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'smartstore',
    ['https://www.greatbritishfood.de/nestle-shreddies-460g', 'https://farben-hornauer.de/', 'https://smartstore.com/'],
    {
        onlyRegions: ['DE'],
    },
);
