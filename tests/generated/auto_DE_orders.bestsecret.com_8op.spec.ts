import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_orders.bestsecret.com_8op', ['https://orders.bestsecret.com/entrance/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
