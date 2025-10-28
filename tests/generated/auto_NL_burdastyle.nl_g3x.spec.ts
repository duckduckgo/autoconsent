import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_burdastyle.nl_g3x', ['https://www.burdastyle.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
