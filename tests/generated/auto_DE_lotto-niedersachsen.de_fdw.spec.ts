import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotto-niedersachsen.de_fdw', ['https://www.lotto-niedersachsen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
