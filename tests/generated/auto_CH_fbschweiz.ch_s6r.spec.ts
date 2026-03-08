import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fbschweiz.ch_s6r', ['https://fbschweiz.ch/index.php/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
