import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_consumer.huawei.com_n5x', ['https://consumer.huawei.com/ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
