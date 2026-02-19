import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_altenberg.de_199', ['https://www.altenberg.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
