import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fluo.grandest.fr_col', ['https://www.fluo.grandest.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
