import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.primor.eu_2vn', ['https://fr.primor.eu/fr_fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
