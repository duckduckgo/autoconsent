import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voyage-prive.com_r0b', ['https://www.voyage-prive.com/login/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
