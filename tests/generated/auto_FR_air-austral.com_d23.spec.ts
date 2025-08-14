import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_air-austral.com_d23', ['https://www.air-austral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
