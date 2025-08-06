import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_takfonster.fr_dxi', ['https://www.takfonster.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
