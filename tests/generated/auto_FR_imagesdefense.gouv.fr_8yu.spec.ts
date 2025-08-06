import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_imagesdefense.gouv.fr_8yu', ['https://imagesdefense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
