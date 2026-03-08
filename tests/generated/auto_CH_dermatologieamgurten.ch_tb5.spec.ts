import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dermatologieamgurten.ch_tb5', ['https://dermatologieamgurten.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
