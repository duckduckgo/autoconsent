import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookies-and-content-security-policy',
    [
        'https://www.sd.se/',
        'https://esny.se/',
        // no reject button: opt out via settings
        'https://hdrmaps.com/',
        'https://geijerskolan.se/',
    ],
    {
        // the plugin reloads the page after saving consent
        testSelfTest: false,
    },
);
