import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_online.yandex.com_0', ['https://online.yandex.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
