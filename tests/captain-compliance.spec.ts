import generateCMPTests from '../playwright/runner';

// the CMP may reload the page right after the click, so the self-test result is lost
generateCMPTests(
    'captain-compliance',
    [
        'https://www.medicaidplanningassistance.org/',
        'https://www.velocitymicro.com/',
        'https://www.ussfcu.org/',
        'https://www.courtreserve.com/',
    ],
    {
        testSelfTest: false,
    },
);
