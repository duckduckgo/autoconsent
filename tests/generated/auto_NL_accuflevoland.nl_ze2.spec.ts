import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_accuflevoland.nl_ze2', ['https://accuflevoland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
