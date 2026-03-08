import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_en.pylontech.com.cn_xn5', ['https://en.pylontech.com.cn/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
