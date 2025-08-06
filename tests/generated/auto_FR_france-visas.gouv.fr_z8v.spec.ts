import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-visas.gouv.fr_z8v', ['https://france-visas.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
