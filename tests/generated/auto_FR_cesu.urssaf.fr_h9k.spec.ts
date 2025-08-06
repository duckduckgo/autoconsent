import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cesu.urssaf.fr_h9k', ['https://www.cesu.urssaf.fr/info/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
