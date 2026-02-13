import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_easylounge.com_e66', ['https://www.easylounge.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
