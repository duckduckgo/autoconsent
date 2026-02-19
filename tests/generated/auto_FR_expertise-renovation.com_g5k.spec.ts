import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_expertise-renovation.com_g5k', ['https://www.expertise-renovation.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
