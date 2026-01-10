import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Ensighten',
    [
        'https://www.audi.ca/en/',
        'https://www.volkswagen.de/',
        'https://de.rs-online.com/',
        'https://www.easyjet.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
