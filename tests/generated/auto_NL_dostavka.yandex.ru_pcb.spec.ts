import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dostavka.yandex.ru_pcb', ['https://dostavka.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
