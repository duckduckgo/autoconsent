import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rotterdam.info_e5f', ['https://www.rotterdam.info/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
