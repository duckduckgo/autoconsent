import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sitedesmarques.com_uxv', ['https://www.sitedesmarques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
