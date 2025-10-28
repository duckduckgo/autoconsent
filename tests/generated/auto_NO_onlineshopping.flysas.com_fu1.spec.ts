import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_onlineshopping.flysas.com_fu1', ['https://onlineshopping.flysas.com/en-DK'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
