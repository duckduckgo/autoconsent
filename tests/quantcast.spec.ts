import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    [
        'https://www.geogebra.org/',
        'https://routenplaner24.net/',
        'https://ffxiv.consolegameswiki.com/',
        'https://www.quotev.com/',
        'https://www.tide-forecast.com/',
        'https://www.miniplay.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
