import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bankofscotland.de_12h', ['https://www.bankofscotland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
