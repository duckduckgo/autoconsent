import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coursesu.com_a0y', ['https://www.coursesu.com/drive/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
