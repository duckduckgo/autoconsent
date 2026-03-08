import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_corse.urssaf.fr_jug', ['https://corse.urssaf.fr/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
