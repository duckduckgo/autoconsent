import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nieuweinstituut.nl_xrx', ['https://nieuweinstituut.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
