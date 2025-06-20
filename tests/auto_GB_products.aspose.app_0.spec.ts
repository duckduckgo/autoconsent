import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_products.aspose.app_0', ['https://products.aspose.app/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
