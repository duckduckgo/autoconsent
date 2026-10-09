import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    ['https://www.geogebra.org/', 'https://www.miniplay.com/', 'https://www.tide-forecast.com/', 'https://www.gamepressure.com/'],
    {
        onlyRegions: ['DE', 'GB', 'FR', 'NL', 'PL'],
    },
);
