import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ryanair.com_png', ['https://www.ryanair.com/nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
