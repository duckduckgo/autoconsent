import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woningruil24.nl_1is', ['https://www.woningruil24.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
