import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitleeuwarden.com_9jn', ['https://www.visitleeuwarden.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
