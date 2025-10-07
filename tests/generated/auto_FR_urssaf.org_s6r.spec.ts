import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_urssaf.org_s6r', ['https://www.urssaf.org/en/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
