import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_music.yandex.ru_sln', ['https://music.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
