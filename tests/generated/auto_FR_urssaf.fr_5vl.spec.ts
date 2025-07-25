import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_urssaf.fr_5vl', ['https://www.urssaf.fr/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
