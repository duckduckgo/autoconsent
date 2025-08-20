import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zoo-leipzig.de_yen', ['https://www.zoo-leipzig.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
