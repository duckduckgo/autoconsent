import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catalogue-bois-construction.fr_73i', ['https://catalogue-bois-construction.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
