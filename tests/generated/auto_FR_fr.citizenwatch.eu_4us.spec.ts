import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.citizenwatch.eu_4us', ['https://fr.citizenwatch.eu/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
