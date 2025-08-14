import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opdeheuvelrug.nl_vs9', ['https://www.opdeheuvelrug.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
