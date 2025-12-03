import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_auto-onderdelen24.nl_4bc', ['https://www.auto-onderdelen24.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
