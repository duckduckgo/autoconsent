import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_electromenager-express.com_eno', ['https://www.electromenager-express.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
