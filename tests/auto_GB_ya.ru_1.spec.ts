import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ya.ru_1', ['https://ya.ru/?nr=1&redirect_ts=1748623978.00000'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
