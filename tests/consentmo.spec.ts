import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmo',
    ['https://filofax.com/', 'https://www.consentmo.com/', 'https://mgemi.com/products/the-felize-saddle-suede'],
    {
        skipRegions: ['US'],
    },
);
