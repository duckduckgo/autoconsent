import generateCMPTests from '../playwright/runner';

// the site reloads the page after a choice is made, so the self-test cannot run
generateCMPTests(
    'bancaditalia',
    [
        'https://www.bancaditalia.it/',
        'https://www.ivass.it/',
        'https://www.arbitrobancariofinanziario.it/',
        'https://www.arbitroassicurativo.org/',
    ],
    {
        testSelfTest: false,
    },
);
