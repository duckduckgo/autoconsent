import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_afisha.yandex.ru_xbg', ['https://afisha.yandex.ru/moscow'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
