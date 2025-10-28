import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_detelefoongids.nl_dwz', ['https://www.detelefoongids.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
