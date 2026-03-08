import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dresden.onleihe.de_7hn', ['https://dresden.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
