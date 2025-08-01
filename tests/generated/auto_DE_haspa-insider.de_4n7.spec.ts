import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haspa-insider.de_4n7', ['https://www.haspa-insider.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
