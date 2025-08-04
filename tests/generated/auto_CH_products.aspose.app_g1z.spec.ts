import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_products.aspose.app_g1z', ['https://products.aspose.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
