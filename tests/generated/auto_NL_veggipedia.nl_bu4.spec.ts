import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_veggipedia.nl_bu4', ['https://www.veggipedia.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
