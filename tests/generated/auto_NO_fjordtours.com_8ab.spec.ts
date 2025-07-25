import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjordtours.com_8ab', ['https://www.fjordtours.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
