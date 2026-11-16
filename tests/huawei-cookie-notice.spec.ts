import generateCMPTests from '../playwright/runner';

generateCMPTests('huawei-cookie-notice', ['https://consumer.huawei.com/en/'], {
    onlyRegions: ['US'],
});
