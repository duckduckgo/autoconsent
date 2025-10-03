import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casadelvino.ch_g8u', ['https://www.casadelvino.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
