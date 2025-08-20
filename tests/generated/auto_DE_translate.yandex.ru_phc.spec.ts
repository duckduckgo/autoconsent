import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_translate.yandex.ru_phc', ['https://translate.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
