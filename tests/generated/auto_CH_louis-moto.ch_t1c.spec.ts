import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_louis-moto.ch_t1c', ['https://www.louis-moto.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
