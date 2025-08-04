import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitpanda.com_9sl', ['https://www.bitpanda.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
