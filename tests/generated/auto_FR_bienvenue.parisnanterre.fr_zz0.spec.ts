import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bienvenue.parisnanterre.fr_zz0', ['https://bienvenue.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
