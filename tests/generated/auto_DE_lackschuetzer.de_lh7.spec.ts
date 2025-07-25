import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lackschuetzer.de_lh7', ['https://lackschuetzer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
