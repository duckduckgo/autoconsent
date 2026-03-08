import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digibobb.onleihe.de_mjs', ['https://digibobb.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
