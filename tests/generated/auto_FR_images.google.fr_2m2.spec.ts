import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_images.google.fr_2m2', ['https://images.google.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
