import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ww2.lifeplus.com_4ei', ['https://ww2.lifeplus.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
