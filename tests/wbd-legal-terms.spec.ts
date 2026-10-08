import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'wbd-legal-terms',
    [
        'https://www.foodnetwork.com/how-to/packages/shopping/product-reviews/best-food-processors',
        'https://www.hgtv.com/',
        'https://www.golfdigest.com/',
        'https://www.tlc.com/',
        'https://www.discovery.com/',
    ],
    {
        // shown only in some US states
        onlyRegions: ['US'],
        testOptIn: false,
        testSelfTest: false,
    },
);
