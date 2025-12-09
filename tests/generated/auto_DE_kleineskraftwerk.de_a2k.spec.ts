import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kleineskraftwerk.de_a2k', ['https://kleineskraftwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
