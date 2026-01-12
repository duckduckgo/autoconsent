import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kleineskraftwerk.de_fx7', ['https://kleineskraftwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
