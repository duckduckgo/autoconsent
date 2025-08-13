import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-visas.gouv.fr_q1o', ['https://france-visas.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
