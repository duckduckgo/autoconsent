import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alexander-wallasch.de_j97', ['https://www.alexander-wallasch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
