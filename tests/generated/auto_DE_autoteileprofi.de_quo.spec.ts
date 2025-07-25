import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoteileprofi.de_quo', ['https://www.autoteileprofi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
