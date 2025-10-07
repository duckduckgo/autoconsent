import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_planning-familial.org_ir2', ['https://www.planning-familial.org/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
