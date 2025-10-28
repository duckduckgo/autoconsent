import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trustdeals.fr_q6a', ['https://www.trustdeals.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
