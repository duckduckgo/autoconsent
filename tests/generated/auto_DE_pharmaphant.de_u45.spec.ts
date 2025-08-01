import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pharmaphant.de_u45', ['https://www.pharmaphant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
