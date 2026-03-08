import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_andnowwedrink.com_xwf', ['https://andnowwedrink.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
