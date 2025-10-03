import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kassenkompass.de_mbo', ['https://kassenkompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
