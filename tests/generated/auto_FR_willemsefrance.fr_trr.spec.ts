import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_willemsefrance.fr_trr', ['https://www.willemsefrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
