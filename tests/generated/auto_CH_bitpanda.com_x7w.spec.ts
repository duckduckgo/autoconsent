import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitpanda.com_x7w', ['https://www.bitpanda.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
