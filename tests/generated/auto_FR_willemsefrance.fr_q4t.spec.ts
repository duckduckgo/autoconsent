import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_willemsefrance.fr_q4t', ['https://www.willemsefrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
