import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snow-online.de_w9b', ['https://www.snow-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
