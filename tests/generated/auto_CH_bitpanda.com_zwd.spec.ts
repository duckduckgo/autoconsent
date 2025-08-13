import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitpanda.com_zwd', ['https://www.bitpanda.com/de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
