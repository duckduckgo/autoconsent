import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frauenaerzte.de_j31', ['https://www.frauenaerzte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
