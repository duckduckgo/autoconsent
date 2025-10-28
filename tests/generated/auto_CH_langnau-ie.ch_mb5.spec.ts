import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_langnau-ie.ch_mb5', ['https://www.langnau-ie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
