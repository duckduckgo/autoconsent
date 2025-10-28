import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_santepubliquefrance.fr_u5a', ['https://www.santepubliquefrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
