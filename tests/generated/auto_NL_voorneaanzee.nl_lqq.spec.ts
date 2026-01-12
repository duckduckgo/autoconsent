import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_voorneaanzee.nl_lqq', ['https://www.voorneaanzee.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
