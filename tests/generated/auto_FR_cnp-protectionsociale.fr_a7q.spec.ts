import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnp-protectionsociale.fr_a7q', ['https://www.cnp-protectionsociale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
