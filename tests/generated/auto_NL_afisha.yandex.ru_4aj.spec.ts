import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_afisha.yandex.ru_4aj', ['https://afisha.yandex.ru/moscow'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
