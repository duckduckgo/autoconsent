import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'fullertonhotels.com',
    [
        'https://www.fullertonhotels.com/',
        'https://www.warwickhotels.com/',
        'https://www.coasthotels.com/',
        'https://digiday.com/marketing/google-delays-third-party-cookie-demise-yet-again/',
    ],
    {
        testOptIn: false,
        testSelfTest: false,
    },
);
