import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_livestrong.com_86o', ['https://www.livestrong.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
