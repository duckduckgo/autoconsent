import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deduikspecialist.nl_ew2', ['https://deduikspecialist.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
