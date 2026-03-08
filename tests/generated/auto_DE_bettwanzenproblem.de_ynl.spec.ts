import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bettwanzenproblem.de_ynl', ['https://bettwanzenproblem.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
