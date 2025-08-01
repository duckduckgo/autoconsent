import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybevasion.fr_4ix', ['https://www.cybevasion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
