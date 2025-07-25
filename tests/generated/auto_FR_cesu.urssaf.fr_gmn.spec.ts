import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cesu.urssaf.fr_gmn', ['https://www.cesu.urssaf.fr/info/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
