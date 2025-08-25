import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_averoachmea.nl_fxj', ['https://www.averoachmea.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
