import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lackschuetzer.de_t5b', ['https://lackschuetzer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
