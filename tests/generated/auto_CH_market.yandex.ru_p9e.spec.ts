import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_market.yandex.ru_p9e', ['https://market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
