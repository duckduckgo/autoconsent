import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_takfonster.fr_d24', ['https://www.takfonster.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
