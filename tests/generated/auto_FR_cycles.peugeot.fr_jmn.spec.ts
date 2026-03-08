import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cycles.peugeot.fr_jmn', ['https://cycles.peugeot.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
