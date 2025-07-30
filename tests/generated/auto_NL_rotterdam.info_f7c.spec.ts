import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rotterdam.info_f7c', ['https://www.rotterdam.info/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
