import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ya.ru_dzs', ['https://ya.ru/?nr=1&redirect_ts=1754479450.00000'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
