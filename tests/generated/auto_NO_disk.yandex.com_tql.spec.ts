import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_disk.yandex.com_tql', ['https://360.yandex.com/disk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
