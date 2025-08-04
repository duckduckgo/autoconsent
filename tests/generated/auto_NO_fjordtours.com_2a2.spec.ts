import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjordtours.com_2a2', ['https://www.fjordtours.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
