import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bewegingsstoornissenindepsychiatrie.nl_sqb', ['https://bewegingsstoornissenindepsychiatrie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
