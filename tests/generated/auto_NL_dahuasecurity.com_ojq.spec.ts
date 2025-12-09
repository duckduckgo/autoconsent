import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dahuasecurity.com_ojq', ['https://www.dahuasecurity.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
