import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_market.yandex.ru_cs6', ['https://market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
