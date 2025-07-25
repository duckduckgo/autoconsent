import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meditecheurope.nl_sxh', ['https://www.meditecheurope.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
