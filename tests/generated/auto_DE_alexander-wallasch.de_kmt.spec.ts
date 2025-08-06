import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alexander-wallasch.de_kmt', ['https://www.alexander-wallasch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
