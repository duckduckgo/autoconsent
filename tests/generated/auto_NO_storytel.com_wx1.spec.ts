import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_storytel.com_wx1', ['https://www.storytel.com/no'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
