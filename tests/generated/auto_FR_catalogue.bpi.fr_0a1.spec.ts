import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catalogue.bpi.fr_0a1', ['https://catalogue.bpi.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
