import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_beckenhorstpress.com_mfr', ['https://beckenhorstpress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
