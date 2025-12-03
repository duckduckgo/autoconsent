import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carnavalet.paris.fr_s1s', ['https://www.carnavalet.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
