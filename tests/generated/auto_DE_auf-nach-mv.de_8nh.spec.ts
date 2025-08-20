import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auf-nach-mv.de_8nh', ['https://www.auf-nach-mv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
