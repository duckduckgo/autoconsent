import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oceane.breizhgo.bzh_3n1', ['https://oceane.breizhgo.bzh/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
