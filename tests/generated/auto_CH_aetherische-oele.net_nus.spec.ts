import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aetherische-oele.net_nus', ['https://aetherische-oele.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
