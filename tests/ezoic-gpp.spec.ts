import generateCMPTests from '../playwright/runner';

// US "Privacy Preferences" notice with a "Do Not Sell My Information" GPP opt-out
generateCMPTests(
    'ezoic-gpp',
    [
        'https://thisvsthat.io/',
        'https://pytutorial.com/',
        'https://www.metric-conversions.org/',
        'https://stattrek.com/',
        'https://www.phrases.org.uk/',
    ],
    {
        onlyRegions: ['US'],
    },
);
