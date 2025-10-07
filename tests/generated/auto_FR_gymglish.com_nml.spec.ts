import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gymglish.com_nml', ['https://www.gymglish.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
