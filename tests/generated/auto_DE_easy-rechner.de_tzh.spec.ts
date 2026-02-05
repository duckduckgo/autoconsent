import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_easy-rechner.de_tzh', ['https://www.easy-rechner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
