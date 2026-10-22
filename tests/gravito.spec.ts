import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gravito',
    [
        // TCF variant, layer 1 reject hidden
        'https://www.gp.se/',
        'https://www.hitta.se/',
        // TCF variant, layer 1 reject visible
        'https://www.foreca.fi/',
        // Light variant
        'https://www.veikkaus.fi/',
    ],
    {
        skipRegions: ['US'],
    },
);
