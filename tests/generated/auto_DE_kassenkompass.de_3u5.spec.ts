import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kassenkompass.de_3u5', ['https://kassenkompass.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
