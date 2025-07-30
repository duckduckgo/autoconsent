import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_playsupervive.com_mgs', ['https://www.playsupervive.com/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
