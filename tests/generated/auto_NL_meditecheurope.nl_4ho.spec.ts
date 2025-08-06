import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meditecheurope.nl_4ho', ['https://www.meditecheurope.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
