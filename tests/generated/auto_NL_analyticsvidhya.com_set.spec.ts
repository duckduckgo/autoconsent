import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_analyticsvidhya.com_set', ['https://www.analyticsvidhya.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
