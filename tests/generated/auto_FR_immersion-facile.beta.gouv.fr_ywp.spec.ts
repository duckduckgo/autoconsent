import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_immersion-facile.beta.gouv.fr_ywp', ['https://immersion-facile.beta.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
