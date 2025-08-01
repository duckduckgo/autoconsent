import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dafy-moto.com_8zt', ['https://www.dafy-moto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
