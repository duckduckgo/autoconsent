import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ya.ru_96r', ['https://ya.ru/?nr=1&redirect_ts=1755062549.00000'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
