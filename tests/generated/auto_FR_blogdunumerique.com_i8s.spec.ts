import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blogdunumerique.com_i8s', ['https://blogdunumerique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
