import generateCMPTests from '../playwright/runner';

// saving preferences submits a form that reloads the page, so the self-test runs before the cookie is set
generateCMPTests(
    'wkda',
    [
        'https://www.wirkaufendeinauto.de/',
        'https://www.noicompriamoauto.it/',
        'https://www.vendezvotrevoiture.fr/',
        'https://www.compramostucoche.es/',
    ],
    {
        testSelfTest: false,
    },
);
