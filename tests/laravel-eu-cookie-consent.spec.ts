import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'laravel-eu-cookie-consent',
    [
        'https://www.digibron.nl/',
        'https://flexiguide.com/',
        'https://hife.es/',
        'https://www.winterfeldt-tai-chi.de/',
        'https://myteam.es/',
    ],
    // saving submits a form and reloads the page, so there is no stable state to self-test
    { testSelfTest: false },
);
