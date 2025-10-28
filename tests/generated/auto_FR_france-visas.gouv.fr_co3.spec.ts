import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-visas.gouv.fr_co3', ['https://france-visas.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
