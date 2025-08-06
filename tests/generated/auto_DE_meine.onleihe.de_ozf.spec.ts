import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine.onleihe.de_ozf', ['https://meine.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
