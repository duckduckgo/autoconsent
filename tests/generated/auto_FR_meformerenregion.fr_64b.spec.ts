import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meformerenregion.fr_64b', ['https://www.meformerenregion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
