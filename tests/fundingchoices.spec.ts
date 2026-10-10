import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    [
        'https://hbr.org/',
        'https://www.dinarguru.com/',
        'https://whichmuseum.de/',
        // legitimate-interest-only notice in the floating toolbar
        'https://gartengurus.de/',
        'https://www.nummercheck.com/',
        'https://howtosayguide.com/',
        'https://www.weg-wissen.de/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);
