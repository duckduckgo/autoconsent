import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_echtegerechten.nl_xaf', ['https://echtegerechten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
