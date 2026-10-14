import generateCMPTests from '../playwright/runner';

// The CMP reloads the page after saving consent, which races the self-test
generateCMPTests(
    'eagerly-tools-cookie',
    [
        'https://mge.nl/agenda/air/',
        'https://www.hetpark.nl/',
        'https://www.goudseschouwburg.nl/',
        'https://www.flint.nl/',
        'https://www.paard.nl/',
    ],
    {
        testSelfTest: false,
    },
);
