import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meijerink-schoenen.nl_ons', ['https://www.meijerink-schoenen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
