import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'iubenda',
    ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/', 'https://www.tuttoandroid.net/'],
    {
        skipRegions: ['AU'],
    },
);
