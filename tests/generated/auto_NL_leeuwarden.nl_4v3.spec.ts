import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_leeuwarden.nl_4v3', ['https://www.leeuwarden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
