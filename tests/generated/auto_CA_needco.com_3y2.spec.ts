import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_needco.com_3y2', ['https://www.needco.com/product/detail/74131/hubbell-wiring-device-ss8'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
