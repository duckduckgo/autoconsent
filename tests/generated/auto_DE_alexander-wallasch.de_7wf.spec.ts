import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alexander-wallasch.de_7wf', ['https://www.alexander-wallasch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
