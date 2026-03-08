import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_barcode.tec-it.com_l8r', ['https://barcode.tec-it.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
