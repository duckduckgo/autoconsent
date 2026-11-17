import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bullionbypost',
    [
        'https://www.inversoro.es/',
        'https://www.bullionbypost.com/',
        'https://www.bullionbypost.eu/',
        'https://www.gold.co.uk/',
        'https://www.goldbypost.nl/',
        'https://www.orissimo.it/',
    ],
    {
        // the site reloads the page after saving, so the self-test never runs
        testSelfTest: false,
    },
);
