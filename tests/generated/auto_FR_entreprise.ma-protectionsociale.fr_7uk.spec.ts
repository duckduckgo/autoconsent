import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprise.ma-protectionsociale.fr_7uk', ['https://entreprise.ma-protectionsociale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
