import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.primor.eu_fss', ['https://fr.primor.eu/fr_fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
