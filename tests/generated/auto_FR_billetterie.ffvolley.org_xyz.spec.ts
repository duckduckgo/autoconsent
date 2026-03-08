import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.ffvolley.org_xyz', ['https://billetterie.ffvolley.org/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
