import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecomparateurassurance.com_ber', ['https://www.lecomparateurassurance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
