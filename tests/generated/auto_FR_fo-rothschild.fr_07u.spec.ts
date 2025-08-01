import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fo-rothschild.fr_07u', ['https://www.fo-rothschild.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
