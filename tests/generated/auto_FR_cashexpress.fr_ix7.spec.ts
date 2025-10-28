import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cashexpress.fr_ix7', ['https://www.cashexpress.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
