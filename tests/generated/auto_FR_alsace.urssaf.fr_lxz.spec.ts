import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alsace.urssaf.fr_lxz', ['https://alsace.urssaf.fr/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
