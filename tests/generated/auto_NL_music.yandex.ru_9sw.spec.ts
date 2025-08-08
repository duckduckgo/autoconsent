import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_music.yandex.ru_9sw', ['https://music.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
