import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_opera-lyon.com_wfj', ['https://www.opera-lyon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
