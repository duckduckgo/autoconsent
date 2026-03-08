import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dailyfreshdejimasushi.sitedish.shop_zub', ['https://dailyfreshdejimasushi.sitedish.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
