import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oceane.breizhgo.bzh_r9t', ['https://oceane.breizhgo.bzh/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
