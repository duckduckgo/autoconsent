import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ordre-infirmiers.fr_ejn', ['https://www.ordre-infirmiers.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
