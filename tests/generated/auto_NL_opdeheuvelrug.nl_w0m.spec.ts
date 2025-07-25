import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_opdeheuvelrug.nl_w0m', ['https://www.opdeheuvelrug.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
