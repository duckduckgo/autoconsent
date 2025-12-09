import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_easylounge.com_er2', ['https://www.easylounge.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
