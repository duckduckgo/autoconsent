import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_retailtrends.nl_xi3', ['https://retailtrends.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
