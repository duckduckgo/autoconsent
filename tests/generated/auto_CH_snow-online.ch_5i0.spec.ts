import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snow-online.ch_5i0', ['https://www.snow-online.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
