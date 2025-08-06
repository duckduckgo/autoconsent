import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pharmaphant.de_o08', ['https://www.pharmaphant.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
