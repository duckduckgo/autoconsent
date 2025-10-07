import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.spankbang.com_oeg', ['https://jp.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
