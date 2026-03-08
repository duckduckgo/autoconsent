import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_derma-alpina.ch_3x5', ['https://derma-alpina.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
