import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bretagne.urssaf.fr_3ti', ['https://bretagne.urssaf.fr/accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
