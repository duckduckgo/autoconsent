import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pgatoursuperstore.com_lkz', ['https://www.pgatoursuperstore.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
