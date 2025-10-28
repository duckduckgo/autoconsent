import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_store.gaijin.net_ccm', ['https://store.gaijin.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
