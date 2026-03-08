import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.aspose.com_mm9', ['https://blog.aspose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
