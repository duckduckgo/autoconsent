import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frauenaerzte.de_jmj', ['https://www.frauenaerzte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
