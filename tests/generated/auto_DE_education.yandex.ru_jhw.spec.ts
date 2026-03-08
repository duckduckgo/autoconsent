import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_education.yandex.ru_jhw', ['https://education.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
