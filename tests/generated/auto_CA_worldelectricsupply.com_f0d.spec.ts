import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_worldelectricsupply.com_f0d',
    ['https://www.worldelectricsupply.com/product/detail/74131/hubbell-wiring-device-ss8'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
