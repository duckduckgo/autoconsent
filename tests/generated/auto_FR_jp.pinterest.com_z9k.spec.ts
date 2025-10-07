import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.pinterest.com_z9k', ['https://jp.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
