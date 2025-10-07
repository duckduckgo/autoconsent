import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_imagesdefense.gouv.fr_0r8', ['https://imagesdefense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
