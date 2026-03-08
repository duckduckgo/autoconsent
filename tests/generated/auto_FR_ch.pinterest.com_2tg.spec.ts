import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ch.pinterest.com_2tg', ['https://ch.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
