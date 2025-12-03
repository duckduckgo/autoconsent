import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisscommunity.org_vjz', ['https://www.swisscommunity.org/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
