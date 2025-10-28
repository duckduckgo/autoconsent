import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjordnorway.com_efd', ['https://www.fjordnorway.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
