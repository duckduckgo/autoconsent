import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_juristenblog.nl_ne9', ['https://juristenblog.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
