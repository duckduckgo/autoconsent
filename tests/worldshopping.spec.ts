import generateCMPTests from '../playwright/runner';

// The widget shows the consent banner to non-Japanese visitors only, and not in the US.
generateCMPTests(
    'worldshopping',
    [
        'https://suzuri.jp/',
        'https://www.beadsmania.com/',
        'https://www.fafa-online.jp/',
        'https://www.online-marks.com/',
        'https://whatzis.jp/',
    ],
    {
        testSelfTest: false,
        skipRegions: ['US', 'JP'],
    },
);
