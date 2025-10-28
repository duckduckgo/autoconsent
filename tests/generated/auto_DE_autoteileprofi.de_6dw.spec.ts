import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoteileprofi.de_6dw', ['https://www.autoteileprofi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
