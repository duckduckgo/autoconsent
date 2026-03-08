import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_domainname.shop_qxa', ['https://domainname.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
