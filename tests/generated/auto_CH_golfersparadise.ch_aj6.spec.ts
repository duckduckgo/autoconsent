import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_golfersparadise.ch_aj6', ['https://golfersparadise.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
