import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hausundgrund.de_zkr', ['https://www.hausundgrund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
