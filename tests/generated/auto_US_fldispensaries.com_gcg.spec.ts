import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fldispensaries.com_gcg', ['https://fldispensaries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
