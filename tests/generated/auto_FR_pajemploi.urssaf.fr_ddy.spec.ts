import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pajemploi.urssaf.fr_ddy', ['https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
