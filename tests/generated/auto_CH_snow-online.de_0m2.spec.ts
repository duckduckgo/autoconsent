import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snow-online.de_0m2', ['https://www.snow-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
