import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_euautoteile.de_jsi', ['https://www.euautoteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
