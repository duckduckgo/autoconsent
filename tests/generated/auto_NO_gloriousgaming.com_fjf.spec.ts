import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gloriousgaming.com_fjf', ['https://www.gloriousgaming.com/en-eu'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
