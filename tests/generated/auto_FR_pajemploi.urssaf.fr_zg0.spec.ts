import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pajemploi.urssaf.fr_zg0', ['https://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
