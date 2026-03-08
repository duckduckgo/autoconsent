import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_competences.moncompteformation.gouv.fr_4td', ['https://competences.moncompteformation.gouv.fr/espace-public/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
