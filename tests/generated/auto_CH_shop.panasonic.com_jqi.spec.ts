import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shop.panasonic.com_jqi', ['https://shop.panasonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
