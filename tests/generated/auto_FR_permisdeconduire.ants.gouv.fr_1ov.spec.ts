import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_permisdeconduire.ants.gouv.fr_1ov', ['https://permisdeconduire.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
