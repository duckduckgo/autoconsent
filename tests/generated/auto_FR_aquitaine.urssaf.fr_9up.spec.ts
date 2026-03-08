import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aquitaine.urssaf.fr_9up', ['https://aquitaine.urssaf.fr/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
