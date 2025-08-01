import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auf-nach-mv.de_vxs', ['https://www.auf-nach-mv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
