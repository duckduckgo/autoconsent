import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_defense.gouv.fr_duj', ['https://www.defense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
