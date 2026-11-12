import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Evidon',
    [
        'https://www.crunchyroll.com/',
        'https://www.computershare.com/',
        'https://www.motorola.com/', // barrier layout in the EU and UK
    ],
    {
        testOptIn: false,
        skipRegions: ['US'],
    },
);
