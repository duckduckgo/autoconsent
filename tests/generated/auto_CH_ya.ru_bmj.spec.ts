import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ya.ru_bmj', ['https://ya.ru/?nr=1&redirect_ts=1753889507.00000'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
