import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voyage-prive.com_1rn', ['https://www.voyage-prive.com/login/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
