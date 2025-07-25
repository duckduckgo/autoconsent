import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_modellbau-berlinski.de_tch', ['https://www.modellbau-berlinski.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
