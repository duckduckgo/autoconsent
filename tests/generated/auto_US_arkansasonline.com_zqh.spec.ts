import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arkansasonline.com_zqh', ['https://www.arkansasonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
