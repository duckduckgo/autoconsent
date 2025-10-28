import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medicijnen.nl_pqy', ['https://www.medicijnen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
