import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_modellbau-berlinski.de_7ia', ['https://www.modellbau-berlinski.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
