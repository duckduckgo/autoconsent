import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sigenergy.com_ar3', ['https://www.sigenergy.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
