import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine.onleihe.de_zx1', ['https://meine.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
