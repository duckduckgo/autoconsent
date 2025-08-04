import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissmedical.net_ojh', ['https://www.swissmedical.net/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
