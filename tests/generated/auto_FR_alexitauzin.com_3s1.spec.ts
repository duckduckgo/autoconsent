import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alexitauzin.com_3s1', ['https://alexitauzin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
