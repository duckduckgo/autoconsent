import generateCMPTests from '../playwright/runner';

// the site reloads the page after a consent choice, so the self-test cannot run
generateCMPTests(
    'rabobank',
    [
        'https://www.rabobank.nl/',
        'https://www.rabobank.com/',
        'https://www.raboimpactfoundation.com/',
        // notice-only variant
        'https://www.rabobank.de/',
        'https://www.rabofinance.cl/',
    ],
    {
        testSelfTest: false,
    },
);
