import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voyage-prive.com_rrl', ['https://www.voyage-prive.com/login/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
