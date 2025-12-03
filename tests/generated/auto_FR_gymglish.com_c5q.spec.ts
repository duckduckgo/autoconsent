import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gymglish.com_c5q', ['https://www.gymglish.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
