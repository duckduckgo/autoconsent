import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rotterdam.info_4y1', ['https://www.rotterdam.info/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
