import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_support.wix.com_qev', ['https://support.wix.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
