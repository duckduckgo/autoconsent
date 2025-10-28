import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_campusfrance.org_0b8', ['https://www.campusfrance.org/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
