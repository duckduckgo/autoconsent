import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lackschuetzer.de_3mt', ['https://lackschuetzer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
