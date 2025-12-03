import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'WP DSGVO Tools',
    [
        'https://shop.fellhof.com/en/',
        // 'https://www.mathe-lerntipps.de/', // https://github.com/duckduckgo/autoconsent/issues/80
    ],
    {
        skipRegions: ['US'],
    },
);
