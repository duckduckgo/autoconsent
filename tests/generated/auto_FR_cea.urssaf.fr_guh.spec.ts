import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cea.urssaf.fr_guh', ['https://www.cea.urssaf.fr/portail/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
