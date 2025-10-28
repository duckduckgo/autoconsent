import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uitgeverijprometheus.nl_9iu', ['https://uitgeverijprometheus.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
