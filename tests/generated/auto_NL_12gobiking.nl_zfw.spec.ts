import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_12gobiking.nl_zfw', ['https://www.12gobiking.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
