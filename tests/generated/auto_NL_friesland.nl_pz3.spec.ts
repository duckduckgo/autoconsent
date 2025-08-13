import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_friesland.nl_pz3', ['https://www.friesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
