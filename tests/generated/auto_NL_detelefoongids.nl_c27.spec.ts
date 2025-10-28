import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_detelefoongids.nl_c27', ['https://www.detelefoongids.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
