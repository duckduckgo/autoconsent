import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.pinterest.com_evk', ['https://jp.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
