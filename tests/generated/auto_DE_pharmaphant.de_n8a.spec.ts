import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pharmaphant.de_n8a', ['https://www.pharmaphant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
