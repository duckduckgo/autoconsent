import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpenverein-muenchen-oberland.de_6he', ['https://www.alpenverein-muenchen-oberland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
