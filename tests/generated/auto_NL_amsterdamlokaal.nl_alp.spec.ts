import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamlokaal.nl_alp', ['https://amsterdamlokaal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
