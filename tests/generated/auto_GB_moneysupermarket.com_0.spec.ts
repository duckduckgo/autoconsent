import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_moneysupermarket.com_0', ['https://www.moneysupermarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
