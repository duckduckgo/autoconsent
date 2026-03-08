import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_avicenna-klinik.com_8qx', ['https://avicenna-klinik.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
