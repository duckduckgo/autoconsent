import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'iubenda',
    ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/', 'https://www.tuttoandroid.net/'],
    {
        skipRegions: ['AU'],
    },
);

// Uses the "press again to continue" reject counter, and reloads on consent, which tears
// down the content script before the self test can run.
generateCMPTests('iubenda', ['https://borromees.com/'], {
    skipRegions: ['AU'],
    testSelfTest: false,
});
