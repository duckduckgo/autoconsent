import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inzutphen.nl_5pk', ['https://www.inzutphen.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
