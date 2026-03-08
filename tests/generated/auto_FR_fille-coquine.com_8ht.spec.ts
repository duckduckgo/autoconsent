import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fille-coquine.com_8ht', ['https://fille-coquine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
