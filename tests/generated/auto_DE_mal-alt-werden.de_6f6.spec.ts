import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mal-alt-werden.de_6f6', ['https://mal-alt-werden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
