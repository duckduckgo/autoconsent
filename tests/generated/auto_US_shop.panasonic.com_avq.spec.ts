import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.panasonic.com_avq', ['https://shop.panasonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
