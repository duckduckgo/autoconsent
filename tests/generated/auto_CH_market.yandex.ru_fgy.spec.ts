import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_market.yandex.ru_fgy', ['https://market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
