import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_universcine.com_1w5', ['https://www.universcine.com/onboarding'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
