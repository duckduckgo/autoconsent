import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.aspose.com_o80', ['https://docs.aspose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
