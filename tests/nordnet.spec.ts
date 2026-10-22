import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'nordnet',
    ['https://www.nordnet.no/', 'https://www.nordnet.se/se', 'https://www.nordnet.dk/', 'https://www.nordnet.fi/'],
    {
        onlyRegions: ['NO', 'DE', 'GB', 'US'],
    },
);
