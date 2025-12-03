import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oceane.breizhgo.bzh_g7u', ['https://oceane.breizhgo.bzh/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
