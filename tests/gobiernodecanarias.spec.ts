import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gobiernodecanarias',
    ['https://www.gobiernodecanarias.org/principal/', 'https://www.gobiernodecanarias.org/educacion/web/'],
    {
        // the site reloads the page after saving consent, so the self-test cannot run
        testSelfTest: false,
    },
);
