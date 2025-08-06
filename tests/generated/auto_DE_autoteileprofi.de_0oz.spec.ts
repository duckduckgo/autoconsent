import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoteileprofi.de_0oz', ['https://www.autoteileprofi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
