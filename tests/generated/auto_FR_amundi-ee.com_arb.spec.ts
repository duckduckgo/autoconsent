import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amundi-ee.com_arb', ['https://www.amundi-ee.com/epargnant'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
