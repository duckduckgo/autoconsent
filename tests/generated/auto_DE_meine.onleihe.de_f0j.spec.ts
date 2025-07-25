import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine.onleihe.de_f0j', ['https://meine.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
