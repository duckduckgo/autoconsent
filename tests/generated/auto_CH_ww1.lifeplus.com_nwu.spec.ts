import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ww1.lifeplus.com_nwu', ['https://ww2.lifeplus.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
