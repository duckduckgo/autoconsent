import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjordtours.com_3ti', ['https://www.fjordtours.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
