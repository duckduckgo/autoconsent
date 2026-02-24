import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_franklinwh.com_dkc', ['https://www.franklinwh.com/products/apower2-home-battery-backup/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
