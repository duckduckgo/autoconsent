import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_products.conholdate.app_i41', ['https://products.conholdate.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
