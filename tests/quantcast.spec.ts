import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    ['https://www.miniplay.com/', 'https://www.geogebra.org/', 'https://routenplaner24.net/', 'https://www.gamepressure.com/'],
    {
        skipRegions: ['US', 'GB', 'FR'],
    },
);
