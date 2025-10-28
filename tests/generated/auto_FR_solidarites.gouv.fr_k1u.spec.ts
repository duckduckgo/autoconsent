import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_solidarites.gouv.fr_k1u', ['https://solidarites.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
