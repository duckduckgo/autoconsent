import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitleiden.nl_b0o', ['https://www.visitleiden.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
