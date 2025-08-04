import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_products.aspose.app_qq1', ['https://products.aspose.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
