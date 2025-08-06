import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haspa-insider.de_8nu', ['https://www.haspa-insider.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
