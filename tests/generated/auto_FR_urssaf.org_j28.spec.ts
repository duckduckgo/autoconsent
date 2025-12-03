import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_urssaf.org_j28', ['https://www.urssaf.org/en/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
