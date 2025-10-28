import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_providercheck.nl_153', ['https://www.providercheck.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
