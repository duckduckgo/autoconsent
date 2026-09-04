import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'secureprivacy',
    [
        // Notice-only configuration: the Decline button is rendered but hidden.
        'https://digiday.com/marketing/google-delays-third-party-cookie-demise-yet-again/',
        'https://novanta.com/',
        'https://elgouna.com/',
    ],
    {
        testOptIn: false,
        testSelfTest: false,
    },
);

generateCMPTests('secureprivacy', ['https://www.fullertonhotels.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
