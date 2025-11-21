import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_afisha.yandex.ru_wh4', ['https://afisha.yandex.ru/moscow'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
