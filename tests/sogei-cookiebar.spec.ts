import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'sogei-cookiebar',
    [
        'https://www.adm.gov.it/',
        'https://www.mase.gov.it/',
        'https://www.fascicolosanitario.gov.it/',
        'https://officina.agenziademanio.it/',
    ],
    {
        // the page reloads after a choice is made, so the self-test runs on a fresh page
        testSelfTest: false,
    },
);
