import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_friesland.nl_lvp', ['https://www.friesland.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
