import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alice.yandex.ru_bv7', ['https://alice.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
