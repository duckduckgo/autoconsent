import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.vcdspro.de_9rq', ['https://forum.vcdspro.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
