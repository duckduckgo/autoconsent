import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_larevueautomobile.com_qyu', ['https://www.larevueautomobile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
