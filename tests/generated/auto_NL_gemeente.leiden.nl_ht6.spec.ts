import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gemeente.leiden.nl_ht6', ['https://gemeente.leiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
