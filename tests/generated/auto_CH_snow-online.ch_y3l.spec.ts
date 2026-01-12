import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snow-online.ch_y3l', ['https://www.snow-online.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
