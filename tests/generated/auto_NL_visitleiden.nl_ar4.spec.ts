import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitleiden.nl_ar4', ['https://www.visitleiden.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
