import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'google-consent-standalone',
    ['https://business.google.com/', 'https://translate.google.com/', 'https://www.youtube.com/@veritasium'],
    {
        skipRegions: ['US', 'CA', 'AU'],
    },
);
