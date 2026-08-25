import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bloomberg-us',
    [
        'https://www.bloomberg.com/news/articles/2026-08-23/canada-sees-long-trade-war-with-us-that-may-last-beyond-midterms',
        'https://www.bloomberg.com/',
    ],
    {
        onlyRegions: ['US'],
        testOptOut: true,
        testOptIn: false,
        testSelfTest: false,
    },
);
