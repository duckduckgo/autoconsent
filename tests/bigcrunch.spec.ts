import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bigcrunch',
    [
        'https://tvtropes.org/',
        'https://www.mlbtraderumors.com/',
        'https://www.alternet.org/',
        'https://attackofthefanboy.com/',
        'https://www.hoopsrumors.com/',
        'https://crooksandliars.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
