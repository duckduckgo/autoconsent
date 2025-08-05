import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_market.yandex.ru_zuk', ['https://market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
