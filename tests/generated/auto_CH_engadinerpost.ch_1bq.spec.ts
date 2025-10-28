import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_engadinerpost.ch_1bq', ['https://www.engadinerpost.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
