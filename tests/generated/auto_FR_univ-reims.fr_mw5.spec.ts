import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-reims.fr_mw5', ['https://www.univ-reims.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
