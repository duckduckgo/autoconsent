import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nlvoorelkaar.nl_dhn', ['https://www.nlvoorelkaar.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
