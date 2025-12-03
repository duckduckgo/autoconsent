import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_artistes-auteurs.urssaf.fr_e84', ['https://www.artistes-auteurs.urssaf.fr/aa/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
