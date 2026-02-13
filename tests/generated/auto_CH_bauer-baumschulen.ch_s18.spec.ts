import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bauer-baumschulen.ch_s18', ['https://www.bauer-baumschulen.ch/de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
