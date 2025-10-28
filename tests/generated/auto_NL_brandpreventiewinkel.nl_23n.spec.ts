import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brandpreventiewinkel.nl_23n', ['https://www.brandpreventiewinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
