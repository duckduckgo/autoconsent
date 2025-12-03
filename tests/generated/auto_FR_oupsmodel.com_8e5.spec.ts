import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oupsmodel.com_8e5', ['https://www.oupsmodel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
