import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_playsupervive.com_la3', ['https://www.playsupervive.com/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
