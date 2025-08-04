import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fjordtours.com_mns', ['https://www.fjordtours.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
