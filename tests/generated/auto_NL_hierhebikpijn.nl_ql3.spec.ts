import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hierhebikpijn.nl_ql3', ['https://www.hierhebikpijn.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
