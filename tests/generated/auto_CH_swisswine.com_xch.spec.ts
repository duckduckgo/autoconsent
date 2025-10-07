import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisswine.com_xch', ['https://www.swisswine.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
