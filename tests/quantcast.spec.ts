import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    [
        'https://www.motor16.com/',
        'https://routenplaner24.net/',
        'https://www.miniplay.com/',
        'https://www.geogebra.org/',
        'https://www.gamepressure.com/',
        'https://ffxiv.consolegameswiki.com/',
        'https://www.quotev.com/',
        'https://www.tide-forecast.com/',
    ],
    {
        skipRegions: ['US'],
    },
);

// US "Do Not Process My Personal Information" (USP/MSPA) dialog; footyheadlines renders the opt-out list collapsed
generateCMPTests('quantcast', ['https://www.motor16.com/', 'https://www.quotev.com/', 'https://www.footyheadlines.com/'], {
    testOptIn: false,
    onlyRegions: ['US'],
});
