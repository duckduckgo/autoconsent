import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_books.yandex.ru_rh5', ['https://books.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
