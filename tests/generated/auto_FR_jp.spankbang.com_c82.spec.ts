import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.spankbang.com_c82', ['https://jp.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
