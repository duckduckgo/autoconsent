import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ya.ru_zo2', ['https://ya.ru/?nr=1&redirect_ts=1753459227.00000'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
