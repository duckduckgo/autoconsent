import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pharmaphant.de_0hg', ['https://www.pharmaphant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
