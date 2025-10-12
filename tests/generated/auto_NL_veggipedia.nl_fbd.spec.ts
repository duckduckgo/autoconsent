import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_veggipedia.nl_fbd', ['https://www.veggipedia.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
