import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_air-austral.com_h1x', ['https://www.air-austral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
