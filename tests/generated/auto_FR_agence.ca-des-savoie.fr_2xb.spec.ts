import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence.ca-des-savoie.fr_2xb', ['https://agence.ca-des-savoie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
