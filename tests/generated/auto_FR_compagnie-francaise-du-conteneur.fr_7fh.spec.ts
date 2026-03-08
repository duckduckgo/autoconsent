import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_compagnie-francaise-du-conteneur.fr_7fh', ['https://compagnie-francaise-du-conteneur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
