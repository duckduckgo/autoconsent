import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lackschuetzer.de_vln', ['https://lackschuetzer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
