import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseau-canope.fr_mwe', ['https://www.reseau-canope.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
