import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_air-journal.fr_guc', ['https://www.air-journal.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
