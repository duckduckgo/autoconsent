import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_analyticsvidhya.com_pbu', ['https://www.analyticsvidhya.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
