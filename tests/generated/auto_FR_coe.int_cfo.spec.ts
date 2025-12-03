import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coe.int_cfo', ['https://www.coe.int/en/web/portal/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
