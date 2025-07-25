import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oupsmodel.com_n65', ['https://www.oupsmodel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
