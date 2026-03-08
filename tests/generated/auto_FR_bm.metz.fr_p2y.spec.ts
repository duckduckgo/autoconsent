import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bm.metz.fr_p2y', ['https://bm.metz.fr/iguana/www.main.cls?surl=accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
