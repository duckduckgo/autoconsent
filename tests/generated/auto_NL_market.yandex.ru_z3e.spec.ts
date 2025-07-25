import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_market.yandex.ru_z3e', ['https://market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
