import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecomparateurassurance.com_30b', ['https://www.lecomparateurassurance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
