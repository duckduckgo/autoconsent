import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmo',
    [
        'https://filofax.com/',
        'https://www.consentmo.com/',
        'https://mgemi.com/products/the-felize-saddle-suede',
        'https://eu.blackdiamondequipment.com/',
        'https://www.directdoors.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
