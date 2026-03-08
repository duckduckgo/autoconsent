import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-changes.cholet.fr_fox', ['https://e-changes.cholet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
