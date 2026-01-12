import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_snow-online.com_9o9', ['https://www.snow-online.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
