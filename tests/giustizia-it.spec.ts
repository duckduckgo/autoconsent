import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'giustizia-it',
    [
        'https://www.cortedicassazione.it/',
        'https://www.procuracassazione.it/',
        'https://www.giustizia.it/giustizia/',
        'https://datiestatistiche.giustizia.it/',
    ],
    {
        // the save button is a link on some sites, so the page navigates before the self-test runs
        testSelfTest: false,
    },
);
