import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_permisdeconduire.ants.gouv.fr_hte', ['https://permisdeconduire.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
