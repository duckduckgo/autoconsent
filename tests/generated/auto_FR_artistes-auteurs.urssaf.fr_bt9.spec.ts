import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_artistes-auteurs.urssaf.fr_bt9', ['https://www.artistes-auteurs.urssaf.fr/aa/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
