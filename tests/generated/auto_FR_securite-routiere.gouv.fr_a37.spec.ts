import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_securite-routiere.gouv.fr_a37', ['https://www.securite-routiere.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
