import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnijssel.nl_y63', ['https://www.rijnijssel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
