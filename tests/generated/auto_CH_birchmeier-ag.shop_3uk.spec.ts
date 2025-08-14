import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_birchmeier-ag.shop_3uk', ['https://birchmeier-ag.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
