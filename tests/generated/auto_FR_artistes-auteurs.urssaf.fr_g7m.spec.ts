import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_artistes-auteurs.urssaf.fr_g7m', ['https://www.artistes-auteurs.urssaf.fr/aa/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
