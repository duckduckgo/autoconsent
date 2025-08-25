import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybevasion.fr_jjp', ['https://www.cybevasion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
