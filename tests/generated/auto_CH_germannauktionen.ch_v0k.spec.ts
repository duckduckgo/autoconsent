import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_germannauktionen.ch_v0k', ['https://www.germannauktionen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
