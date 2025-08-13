import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoentrepreneur.urssaf.fr_qzq', ['https://www.autoentrepreneur.urssaf.fr/portail/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
