import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_etudiants.parisnanterre.fr_amk', ['https://etudiants.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
