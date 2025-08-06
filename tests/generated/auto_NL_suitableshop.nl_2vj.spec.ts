import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_suitableshop.nl_2vj', ['https://www.suitableshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
