import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meteovoyage.com_4zk', ['https://www.meteovoyage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
