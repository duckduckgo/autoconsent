import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rittal.com_sd4', ['https://www.rittal.com/us-en_US/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
