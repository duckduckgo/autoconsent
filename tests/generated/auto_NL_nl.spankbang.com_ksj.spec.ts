import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.spankbang.com_ksj', ['https://nl.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
