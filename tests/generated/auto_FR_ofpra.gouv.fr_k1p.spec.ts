import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ofpra.gouv.fr_k1p', ['https://www.ofpra.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
