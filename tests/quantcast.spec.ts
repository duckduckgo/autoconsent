import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    [
        'https://community.simon42.com/',
        'https://www.geogebra.org/',
        'https://routenplaner24.net/',
        'https://www.gamepressure.com/',
        'https://now.gg/',
        'https://ffxiv.consolegameswiki.com/',
    ],
    {
        skipRegions: ['US'],
    },
);
