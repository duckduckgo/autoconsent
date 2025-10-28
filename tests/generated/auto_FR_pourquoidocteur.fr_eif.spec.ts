import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pourquoidocteur.fr_eif', ['https://www.pourquoidocteur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
