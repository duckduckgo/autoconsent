import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_disk.yandex.com.tr_ilh', ['https://disk.yandex.com.tr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
