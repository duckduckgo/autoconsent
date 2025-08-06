import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auf-nach-mv.de_n39', ['https://www.auf-nach-mv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
