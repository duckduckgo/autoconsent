import generateCMPTests from '../playwright/runner';

generateCMPTests('ministero-giustizia-it', [
    'https://www.giustizia.it/giustizia/',
    'https://tribunale-bari.giustizia.it/',
    'https://pst.giustizia.it/PST/',
]);

// "Salva preferenze" is a link that navigates away before the self-test can run
generateCMPTests('ministero-giustizia-it', ['https://www.cortedicassazione.it/'], {
    testSelfTest: false,
});
