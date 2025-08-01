import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_letese.urssaf.fr_xru', ['https://www.letese.urssaf.fr/portail/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
