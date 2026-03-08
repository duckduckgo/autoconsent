import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fokolar-bewegung.ch_k9d', ['https://fokolar-bewegung.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
