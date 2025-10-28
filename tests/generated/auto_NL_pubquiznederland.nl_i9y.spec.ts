import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pubquiznederland.nl_i9y', ['https://pubquiznederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
